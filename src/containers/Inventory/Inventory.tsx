/**
 * Sample BLE React Native App
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  NativeModules,
  NativeEventEmitter,
  Platform,
  PermissionsAndroid,
  FlatList,
  TouchableHighlight,
  Pressable,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Buffer } from 'buffer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CalendarPicker from "react-native-calendar-picker";





//Generic function for encoding string to Uint8Array
const encodeText = (str: string) => {
  const bufferObj = Buffer.from(str, 'utf-8');
  return bufferObj.toJSON().data;
}

//Generic function for decoding Uint8Array to string
const decodeText = (data: number[]) => String.fromCharCode.apply(null, data);

//Generic function for decoding Uint8Array to Float
const decodeInt = (data: number[]) => {
  var length = data.length;

  let buffer = Buffer.from(data);
  var result = buffer.readUInt32BE(0);

  return result;
}


//Service UUIDS Array that we will get while scanning.
const SERVICE_UUIDS: string[] = [];

//Second For Scanning For Devices.
const SECONDS_TO_SCAN_FOR = 5;

//Duplicates Peripheral can be scanned.
const ALLOW_DUPLICATES = true;


const SERVICE_ID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const PERIPHERAL_ID = "FC:B4:67:51:2A:9E";

const CHARACTERISTIC_ID_1 = "beb5483e-36e1-4688-b7f5-ea07361b26a8";



import BleManager, {
  BleDisconnectPeripheralEvent,
  BleManagerDidUpdateValueForCharacteristicEvent,
  BleScanCallbackType,
  BleScanMatchMode,
  BleScanMode,
  Peripheral,
} from 'react-native-ble-manager';
import { useDispatch, useSelector } from 'react-redux';
import { AdminAppAction } from '../../store/actions';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

declare module 'react-native-ble-manager' {
  // enrich local contract with custom state properties needed by App.tsx
  interface Peripheral {
    connected?: boolean;
    connecting?: boolean;
  }
}
const MAX_POINTS = 100;

const Inventory = () => {

  const circularProgressRef = useRef();

 

  // const handleEndShift = (val) =>{
  //   setRecordEndShift(val)
  //   setShowSale(true)
  //   let sale = recordStart - recordEndShift
  //   alert(sale)
  // }



  const [isScanning, setIsScanning] = useState(false);
  const [peripherals, setPeripherals] = useState(
    new Map<Peripheral['id'], Peripheral>(),
  );
  const [distanceFromObj, setDistanceFromObj] = useState(100);

  console.debug('peripherals map updated', [...peripherals.entries()]);

  const addOrUpdatePeripheral = (id: string, updatedPeripheral: Peripheral) => {
    // new Map() enables changing the reference & refreshing UI.
    // TOFIX not efficient.
    setPeripherals(map => new Map(map.set(id, updatedPeripheral)));
  };

  const startScan = () => {
    if (!isScanning) {
      // reset found peripherals before scan
      setPeripherals(new Map<Peripheral['id'], Peripheral>());

      try {
        console.debug('[startScan] starting scan...');
        setIsScanning(true);
        BleManager.scan(SERVICE_UUIDS, SECONDS_TO_SCAN_FOR, ALLOW_DUPLICATES, {
          matchMode: BleScanMatchMode.Sticky,
          scanMode: BleScanMode.LowLatency,
          callbackType: BleScanCallbackType.AllMatches,
        })
          .then(() => {
            console.debug('[startScan] scan promise returned successfully.');
          })
          .catch(err => {
            console.error('[startScan] ble scan returned in error', err);
          });
      } catch (error) {
        console.error('[startScan] ble scan error thrown', error);
      }
    }
  };

  const handleStopScan = () => {
    setIsScanning(false);
    console.debug('[handleStopScan] scan is stopped.');
  };

  const handleDisconnectedPeripheral = (
    event: BleDisconnectPeripheralEvent,
  ) => {
    let peripheral = peripherals.get(event.peripheral);
    if (peripheral) {
      console.debug(
        `[handleDisconnectedPeripheral][${peripheral.id}] previously connected peripheral is disconnected.`,
        event.peripheral,
      );
      addOrUpdatePeripheral(peripheral.id, { ...peripheral, connected: false });
    }
    console.debug(
      `[handleDisconnectedPeripheral][${event.peripheral}] disconnected.`,
    );
  };

  const handleUpdateValueForCharacteristic = (
    data: BleManagerDidUpdateValueForCharacteristicEvent,
  ) => {
    // console.log("mera log waah", data.value);

    const stringVal = decodeText(data.value);
    setDistanceFromObj(parseInt(stringVal));

  };
  const handleDiscoverPeripheral = (peripheral: Peripheral) => {
    console.debug('[handleDiscoverPeripheral] new BLE peripheral=', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }

    console.log('peripheral ID =========>>', peripheral.id,peripheral.name)

    //Additional check below to only show defined peripheral UUID ( PERIPHERAL_ID )

    // if (PERIPHERAL_ID.includes(peripheral.id)) {
    addOrUpdatePeripheral(peripheral.id, peripheral);
    // }
  };

  const togglePeripheralConnection = async (peripheral: Peripheral) => {
    if (peripheral && peripheral.connected) {
      try {
        await BleManager.disconnect(peripheral.id);
      } catch (error) {
        console.error(
          `[togglePeripheralConnection][${peripheral.id}] error when trying to disconnect device.`,
          error,
        );
      }
    } else {
      await connectPeripheral(peripheral);
    }
  };

  const retrieveConnected = async () => {
    try {
      const connectedPeripherals = await BleManager.getConnectedPeripherals();
      if (connectedPeripherals.length === 0) {
        Alert.alert('Device not found', 'You are currently not connected to any device');
        return;
      }

      for (var i = 0; i < connectedPeripherals.length; i++) {
        var peripheral = connectedPeripherals[i];
        addOrUpdatePeripheral(peripheral.id, { ...peripheral, connected: true });
      }
    } catch (error) {
      console.error(
        '[retrieveConnected] unable to retrieve connected peripherals.',
        error,
      );
    }
  };



  const connectPeripheral = async (peripheral: Peripheral) => {
    try {
      if (peripheral) {
        addOrUpdatePeripheral(peripheral.id, { ...peripheral, connecting: true });

        await BleManager.connect(peripheral.id);
        console.debug(`[connectPeripheral][${peripheral.id}] connected.`);

        addOrUpdatePeripheral(peripheral.id, {
          ...peripheral,
          connecting: false,
          connected: true,
        });

        // before retrieving services, it is often a good idea to let bonding & connection finish properly
        await sleep(200);

        /* Test read current RSSI value, retrieve services first */
        const peripheralData = await BleManager.retrieveServices(peripheral.id);
        console.debug(
          `[connectPeripheral][${peripheral.id}] retrieved peripheral services`,
          peripheralData,
        );

        await BleManager.startNotification(peripheral.id, SERVICE_ID, CHARACTERISTIC_ID_1);
        console.debug(`[Notification Started][${peripheral.id}].`);

        const rssi = await BleManager.readRSSI(peripheral.id);
        console.debug(
          `[connectPeripheral][${peripheral.id}] retrieved current RSSI value: ${rssi}.`,
        );

        if (peripheralData.characteristics) {
          for (let characteristic of peripheralData.characteristics) {

            try {
              let data = await BleManager.read(
                peripheral.id,
                characteristic.service,
                characteristic.characteristic,
              );

              const str = decodeText(data);
              console.log(`data read as ${str}`);

              console.debug(
                `[connectPeripheral][${peripheral.id}] descriptor read as:`,

              );
            } catch (error) {
              console.error(
                `[connectPeripheral][${peripheral.id}] failed to retrieve descriptorfor characteristic ${characteristic}:`,
                error,
              );
            }

          }
        }

        let p = peripherals.get(peripheral.id);
        // if (p) {
        //   addOrUpdatePeripheral(peripheral.id, {...peripheral, rssi});
        // }
      }
    } catch (error) {
      console.error(
        `[connectPeripheral][${peripheral.id}] connectPeripheral error`,
        error,
      );
    }
  };

  function sleep(ms: number) {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    try {
      BleManager.start({ showAlert: false })
        .then(() => console.debug('BleManager started.'))
        .catch(error =>
          console.error('BeManager could not be started.', error),
        );
    } catch (error) {
      console.error('unexpected error starting BleManager.', error);
      return;
    }

    const listeners = [
      bleManagerEmitter.addListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral,
      ),
      bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan),
      bleManagerEmitter.addListener(
        'BleManagerDisconnectPeripheral',
        handleDisconnectedPeripheral,
      ),
      bleManagerEmitter.addListener(
        'BleManagerDidUpdateValueForCharacteristic',
        handleUpdateValueForCharacteristic,
      ),
    ];

    handleAndroidPermissions();

    return () => {
      console.debug('[app] main component unmounting. Removing listeners...');
      for (const listener of listeners) {
        listener.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAndroidPermissions = () => {
    if (Platform.OS === 'android' && Platform.Version >= 31) {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      ]).then(result => {
        if (result) {
          console.debug(
            '[handleAndroidPermissions] User accepts runtime permissions android 12+',
          );
        } else {
          console.error(
            '[handleAndroidPermissions] User refuses runtime permissions android 12+',
          );
        }
      });
    } else if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(checkResult => {
        if (checkResult) {
          console.debug(
            '[handleAndroidPermissions] runtime permission Android <12 already OK',
          );
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then(requestResult => {
            if (requestResult) {
              console.debug(
                '[handleAndroidPermissions] User accepts runtime permission android <12',
              );
            } else {
              console.error(
                '[handleAndroidPermissions] User refuses runtime permission android <12',
              );
            }
          });
        }
      });
    }
  };

  const renderItem = ({ item }: { item: Peripheral }) => {
    const backgroundColor = item.connected ? '#069400' : Colors.white;
    return (


      <TouchableHighlight
        underlayColor="#0082FC"
        onPress={() => togglePeripheralConnection(item)}>
        <View style={[styles.row, { backgroundColor }]}>
          <Text style={styles.peripheralName}>
            {/* completeLocalName (item.name) & shortAdvertisingName (advertising.localName) may not always be the same */}
            {item.name || item?.advertising?.localName}
            {item.connecting && ' - Connecting...'}
          </Text>
          <Text style={styles.rssi}>RSSI: {item.rssi}</Text>
          <Text style={styles.peripheralId}>{item.id}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  let fill = (distanceFromObj / MAX_POINTS) * 100;
//   console.log('filled==>', fill);
  fill = 100 - fill;

  let percentage = (distanceFromObj / MAX_POINTS) * 100;
//   console.log('percentage before===>', percentage)
  percentage = Math.max(0, 100 - percentage);

  const days = [
    { id: 1, day: 'Monday' },
    { id: 2, day: 'Tuesday' },
    { id: 3, day: 'Wednesday' },
    { id: 4, day: 'Thursday' },
    { id: 5, day: 'Friday' },
    { id: 6, day: 'Saturday' },
    { id: 7, day: 'Sunday' },

  ]

  const [date, setShowDate] = useState(false);

  const [color, setcolor] = useState(false)

  const [showDay, setshowDay] = useState('')

  const [hideDays, setHideDays] = useState(false)

  const [startShift, showStartShift] = useState(false)
  
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const dispatch = useDispatch()
  const shiftOneStatus = useSelector(state => state.AdminAppReducer.shiftOne);
  const shiftTwoStatus = useSelector(state => state.AdminAppReducer.shiftTwo);

  const [recordStart, setRecordStart] = useState(0)
  const [endShift, showEndShift] = useState(false)
  const [recordEndShift, setRecordEndShift] = useState(0)
  const [showSale, setShowSale] = useState(false)


  const [totalDaySale, setTotalDaySale] = useState({})



  const [endShiftValue, setEndShiftValue] = useState(0)

  const petrolInRupees = 300;


  const calculateSale = (val: number) => {
    const saleObj = { ...totalDaySale }
    setEndShiftValue(val)
    if (val > recordStart) {
      let refill = val - recordStart;
      setRecordStart(recordStart + refill)
    }
    //Convert percentage to point  value
    let sale = (recordStart - val) / 100;
    //multiply it by total tank litre 
    sale = MAX_POINTS * sale
    //convert this litre to rupees
    let saleInRupees = sale * petrolInRupees

    // setFinalSale(saleInRupees)
    saleObj['daySale'] = saleInRupees;
    saleObj['day'] = selectedStartDate;
    alert(`${totalDaySale}'rs`)
    console.error(saleObj)
    showEndShift(false)
    if (shiftOne) {
      // dispatch(AdminAppAction.ShiftOneStatus(true))
      // dispatch(AdminAppAction.ShiftTwoStatus(true))           
      setShiftOne(false)
      setShiftTwo(true)
    }
    else  {
     setShiftTwo(false)
    //  dispatch(AdminAppAction.ShiftTwoStatus(true))  
     showCalendar(true)

    }
    setHideDays(false)
  }

  //Logic for Flow
  const [shiftOne, setShiftOne] = useState(shiftOneStatus);
  const [shiftTwo, setShiftTwo] = useState(shiftTwoStatus);
  const [calendar, showCalendar] = useState(false);

  const handleShiftOne = (percentage : number) =>{
    setRecordStart(percentage);
    showEndShift(true)
  }

  useEffect(() => {
    if (!shiftOne && !shiftTwo) {
      showCalendar(true)
    }
  }, [shiftOne])

  useEffect(() => {
    dispatch(AdminAppAction.ShiftOneStatus(shiftOne))
    dispatch(AdminAppAction.ShiftTwoStatus(shiftTwo))
  }, [shiftOne,shiftTwo])
  

  const onDateChange = (date) => {
    // Move the selected date one day forward
    // const nextDay = new Date(date);
    // nextDay.setDate(nextDay.getDate() + 1);

    setSelectedStartDate(date);
    // dispatch(AdminAppAction.ShiftOneStatus(true)) 
    setShiftOne(true) 

    // setShiftOne(true);
    showCalendar(false);
  };
  

  const startDate = selectedStartDate ? selectedStartDate.toString() : "";

  const handleOk = (item) => {
    setcolor(item?.id)
    setHideDays(true)
    setTotalDaySale({ day: item?.day })
    showStartShift(true)
    // setshowDay(id)
    // console.error('days[showday]', days[showDay])
  }
  const [jee, setjee] = useState([])
  const handleDaySelect = (item) => {
    Alert.alert(
      `Select Day`,
      `Are you sure you want to select ${item?.day}`,
      [
        { text: 'Yes', onPress: () => handleOk(item) },
        {
          text: 'Cancel',
          style: 'cancel',

        },
      ],
      { cancelable: false },
    );

  }

  // const handleDisable = () => {
  //   setjee((prev) => [...prev, selectedStartDate]);
  // };
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.body}>
        <ScrollView>

        {!hideDays &&

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
            {days.map((item, index) => {
              return (
                <Pressable onPress={() => handleDaySelect(item)} style={{ margin: 10, backgroundColor: color === index ? 'red' : 'orange', borderRadius: 10, padding: 5 }} key={index}>
                  <Text style={styles.recordText}>{item?.day}</Text>
                </Pressable >
              )
            })}
          </View>}



        <TouchableOpacity activeOpacity={0.8} style={styles.scanButton} onPress={startScan}>
          <Text style={styles.scanButtonText}>
            {isScanning ? 'Scanning...' : 'Scan Bluetooth'}
          </Text>
        </TouchableOpacity>

        {!Array.from(peripherals.values()).find((item) => item.connected) &&
          <TouchableOpacity activeOpacity={0.8}
            style={[styles.scanButton]} onPress={retrieveConnected}>
            <Text style={styles.scanButtonText}>
              Retrieve Connected Device
            </Text>
          </TouchableOpacity>
        }

        {Array.from(peripherals.values()).length === 0 && (
          <View style={styles.row}>
            <Text style={styles.noPeripherals}>
              No Peripherals, press "Scan Bluetooth" above.
            </Text>
          </View>
        )}

        {!Array.from(peripherals.values()).find((item) => item.connected) &&
          <FlatList
            data={Array.from(peripherals.values())}
            contentContainerStyle={{ rowGap: 12 }}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />}

        {Array.from(peripherals.values()).find((item) => item.connected) &&



          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {calendar &&     
             <View style={{ backgroundColor: 'white' }}>
              <CalendarPicker selectedDayColor={'green'} onDateChange = {onDateChange}  />
            </View>
 }
       
            <View>
              <Text style={styles.recordText}>SELECTED DATE:{startDate}</Text>
            </View>



            <Text style={styles.titleDevices}> Ultrasonic Sensor - Distance Calculator </Text>
            <AnimatedCircularProgress
              size={200}
              width={15}
              backgroundWidth={5}
              fill={fill}
              tintColor="#00ff00"
              tintColorSecondary="#ff0000"
              backgroundColor="#3d5875"
              // arcSweepAngle={240}
              // rotation={240}
              lineCap="round">
              {fill => <Text style={styles.points}>{percentage}%</Text>}

            </AnimatedCircularProgress>


            {
              (shiftOne || shiftTwo) &&
              <Pressable style={styles.buttonStyle}>


                

                <Text style={styles.recordText} onPress={() => handleShiftOne(percentage)} >{shiftOne ? 'Shift One Start' : 'Shift Two Start' }≈</Text>
              </Pressable>
            }


            {endShift &&
              <Pressable style={styles.buttonStyle}>
                <Text style={styles.recordText} onPress={() => calculateSale(percentage)}>
                {shiftOne ? 'End Shift One' : 'End Shift Two' }
                </Text>
              </Pressable>









            }




            {percentage > 80 && <Text style={[styles.titleDevices, { color: "red" }]}> CRITICAL POINT REACHED! PLEASE STOP!</Text>}
          </View>
        }




</ScrollView>
      </SafeAreaView>
    </>
  );
};

const boxShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    color: Colors.black,
  },
  scanButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#0a398a',
    margin: 10,
    borderRadius: 12,
    ...boxShadow,
  },
  scanButtonText: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: Colors.white,
  },
  body: {
    backgroundColor: 'black',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  titleDevices: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
    marginVertical: 50,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  peripheralName: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  rssi: {
    fontSize: 12,
    textAlign: 'center',
    padding: 2,
  },
  peripheralId: {
    fontSize: 12,
    textAlign: 'center',
    padding: 2,
    paddingBottom: 20,
  },
  row: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    ...boxShadow,
  },
  noPeripherals: {
    margin: 10,
    textAlign: 'center',
    color: Colors.white,
  },
  input: {
    borderColor: "gray",
    width: "80%",
    height: 40,
    alignSelf: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 20,
    textAlignVertical: "center",
    textAlign: "left",
  },
  points: {
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: '100',
  },
  recordText: {
    color: 'white',
    fontSize: 20,
    // marginVertical:50
  },

  buttonStyle: {
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 10,
    marginVertical: 20
  }
});

export default Inventory;