/**
 * Sample BLE React Native App
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
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


import { Buffer } from 'buffer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CalendarPicker from "react-native-calendar-picker";



let r = 7.3;
let pi = 3.14;
let maxHeight = 27;
let actualHeight; // in cm
let capacity;
let volume;


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
import { AdminAppAction, CommonAction, ManagerAppAction } from '../../store/actions';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import CustomButton from '../../components/Buttons/CustomButton';
import BottomSheet from '../../components/RBSheet/RBSheet';
import { GlobalStyle } from '../../constants/GlobalStyle';
import CustomInput from '../../components/Inputs/Input';
import Icons from '../../config/icons';
import { Colors, Metrix, Fonts } from '../../config';
import { useForm } from 'react-hook-form';
import SalesFunctions from '../../config/util/HelperFunctions/SalesFunctions';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadPetrolModal from '../../components/LoadPetrolModal/LoadPetrolModal';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

declare module 'react-native-ble-manager' {
  // enrich local contract with custom state properties needed by App.tsx
  interface Peripheral {
    connected?: boolean;
    connecting?: boolean;
  }
}
const MAX_POINTS = 27;
const oneLitreInCm = 4.25;
const Inventory = () => {

  const circularProgressRef = useRef();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });




  const [isScanning, setIsScanning] = useState(false);
  const [hideBluetooth, setHideBluetooth] = useState(false)
  const [peripherals, setPeripherals] = useState(
    new Map<Peripheral['id'], Peripheral>(),
  );
  const [distanceFromObj, setDistanceFromObj] = useState(25);

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

    // console.log('data===========>', data)
    const stringVal = decodeText(data.value);
    console.log('stringVal===>', stringVal)

    // Calculate water level in meters
    actualHeight = maxHeight - stringVal;



    if (stringVal <= maxHeight) {
      // Calculate volume in cubic meters
      volume = ((pi * (r * r)) * (actualHeight));

      // Convert volume to liters
      capacity = (volume / 1000).toFixed(1);
      // capacity.toFixed(0);  
    } else {
      capacity = 0
      volume = 0;
    }

    console.log('litres==>', capacity)
    setDistanceFromObj(parseInt(stringVal));



  };
  // console.log('distance===========>', distanceFromObj)
  const handleDiscoverPeripheral = (peripheral: Peripheral) => {
    console.debug('[handleDiscoverPeripheral] new BLE peripheral=', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }

    // console.log('peripheral ID =========>>', peripheral.id,peripheral.name)

    //Additional check below to only show defined peripheral UUID ( PERIPHERAL_ID )

    if (PERIPHERAL_ID.includes(peripheral.id)) {
      addOrUpdatePeripheral(peripheral.id, peripheral);
    }
  };

  const togglePeripheralConnection = async (peripheral: Peripheral) => {
    setHideBluetooth(true)
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
    const backgroundColor = item.connected ? '#069400' : Colors.Primary;
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
  percentage = percentage.toFixed(0)


  const dispatch = useDispatch()
  const shiftOneStatus = useSelector(state => state.AdminAppReducer.shiftOne);
  const shiftTwoStatus = useSelector(state => state.AdminAppReducer.shiftTwo);
  const petrolInRupees = useSelector(state => state.CommonReducer.current_rates);
  const disabledDate = useSelector(state => state.AdminAppReducer.currDate);
  const [petrolBeforeLoad, setPetrolBeforeLoad] = useState(0)
  const [recordStart, setRecordStart] = useState(0)
  const [endShift, showEndShift] = useState(false)
  const [recordEndShift, setRecordEndShift] = useState(0)
  const [showSale, setShowSale] = useState(false)
  const [endShiftValue, setEndShiftValue] = useState(0)
  const [loadPetrolSheet, showLoadPetrolSheet] = useState(false);

  // const petrolInRupees = currentRates.sale_price_per_liter ;


  console.log('petrolInRupees', petrolInRupees)


  const handleLoadPetrol = (currPetrol: number) => {
    console.log('currPetrol', currPetrol)
    showLoadPetrolSheet(true)
    setPetrolBeforeLoad(currPetrol)
  };

  const calculateSale = (closingLitre: number) => {
    setEndShiftValue(closingLitre)
    let finalSale = recordStart - closingLitre;
    finalSale = finalSale + currentSale;
    setCurrentSale(finalSale)

    // //Convert percentage to point  value
    // finalSale = finalSale / 100;

    // //Multiply it by total tank litre 
    // finalSale = finalSale * oneLitreInCm


    const litreSold = closingLitre;
    console.log('finalSale==>', saleObject)
    //Convert this litre to rupees
    let saleInRupees = Math.round(finalSale * petrolInRupees.sale_price_per_liter)

    showEndShift(false)
    const payload = {
      ...saleObject,
      sale_in_rs: saleInRupees,
      shift_type: shiftOne ? '1' : '2',
      litre_sold: closingLitre,
      action: 'end',
      token: user?.access_token?.plainTextToken
    }
    if (shiftOne) {
      setShiftOne(false)
      dispatch(ManagerAppAction.PostShiftEnd(payload))
      setShiftTwo(true)
      setSaleObject({})
    }
    else {
      setShiftTwo(false)
      dispatch(ManagerAppAction.PostShiftEnd(payload))
      showCalendar(true)
      setSaleObject({})

    }

  }

  const handleLoad = (currentQuanitity) => {
    const petrolLoaded = petrolBeforeLoad - currentQuanitity;
    console.warn(petrolLoaded)
    setCurrentSale(recordStart - petrolBeforeLoad)
    const updatedOpenQuantity = SalesFunctions.LoadPetrol(recordStart, petrolLoaded);
    setRecordStart(updatedOpenQuantity)
    showLoadPetrolSheet(false)
  }

  // const LoadPetrolSheet = () => {
  //   const loadPetrolSheetComponent = useMemo(() => {
  //     return (
  //       <BottomSheet
  //         bottomSheetVisible={loadPetrolSheet}
  //         onCloseReq={() => {
  //           showLoadPetrolSheet(false);
  //         }}
  //         children={
  //           <View style={styles.container}>
  //             <View style={{ backgroundColor: 'red', bottom: 10, right: -10 }}>
  //               <Icons.Entypo
  //                 name="cross"
  //                 size={Metrix.VerticalSize(25)}
  //                 color={Colors.Primary}
  //                 style={styles.crossIcon}
  //                 onPress={() => showLoadPetrolSheet(false)}
  //               />
  //             </View>
  //             <View style={{ height: 15 }} />
  //             <CustomInput
  //               editable={false}
  //               boxStyle={styles.inputStyle}
  //               placeholder="Enter Amount in Litre"
  //               fontSize={scale(16)}
  //               control={control}
  //               name="amount"
  //               maxLength={20}
  //             />

  //             <CustomButton
  //               restyleContainer={{
  //                 marginVertical: Metrix.VerticalSize(40),
  //                 backgroundColor: Colors.Yellow,
  //               }}
  //               text={'Confirm'}
  //               onPress={() => handleLoad(capacity)}
  //             />
  //           </View>
  //         }
  //       />
  //     );
  //   }, []);

  //   return loadPetrolSheetComponent;
  // };



  // const onHandleConfirmation = ()=> {
  //   console.log('value==>', value);
  //   setShowModal(false);

  //   setSaleObject(value)



  // });


  //Logic for Flow
  const user = useSelector(state => state.AuthReducer.user);
  const [shiftOne, setShiftOne] = useState(shiftOneStatus);
  const [shiftTwo, setShiftTwo] = useState(shiftTwoStatus);
  const [calendar, showCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [currentSale, setCurrentSale] = useState(0);
  const [saleObject, setSaleObject] = useState({})


  useEffect(() => {
    loadSelectedDates();
  }, [])


  useEffect(() => {

    const token = {
      token: user?.access_token?.plainTextToken,
    };
    dispatch(CommonAction.GetCurrentRates(token));
  }, []);

  const loadSelectedDates = async () => {
    try {
      const storedDates = await AsyncStorage.getItem('selectedDates');
      if (storedDates !== null) {
        setSelectedDates(JSON.parse(storedDates))

      }

    }
    catch (e) {
      setSelectedDates([])
    }
  }

  const saveSelectedDates = async (dates) => {
    try {
      await AsyncStorage.setItem('selectedDates', JSON.stringify(dates))
    } catch (error) {
      console.log('error in dates', error)
    }
  }
  console.log('saleObject========>', saleObject)
  const onDateChange = (date) => {

    const selectedDateString = moment(date).format('YYYY-MM-DD');
    setSaleObject({ date: selectedDateString })
    console.log('date===>', selectedDateString)
    // Check if the date is already selected
    const isDateSelected = selectedDates.includes(selectedDateString);
    let updatedDates;

    if (isDateSelected) {
      // Date is already selected, remove it from the list

      updatedDates = selectedDates.filter((selectedDate) => selectedDate !== selectedDateString);
      setSelectedDates(updatedDates);
    } else {
      // Date is not selected, add it to the list 
      updatedDates = [...selectedDates, selectedDateString];
      setSelectedDates(updatedDates);
    }
    // Save the updated dates to AsyncStorage
    saveSelectedDates(updatedDates);
    // setSelectedDates(date);
    setShiftOne(true)
    showCalendar(false);

  };






  const handleShift = (currentLitres: number) => {
    const {supervisor_name} = saleObject
    setShowModal(true)
    setRecordStart(currentLitres);
    let shiftType = shiftOne ? '1' : '2';
    const payload = {
      open_quantity: currentLitres,
      shift_type: shiftType,
      action: 'start',
      token: user?.access_token?.plainTextToken,
      supervisor_name: supervisor_name
    }

    dispatch(ManagerAppAction.PostShiftStart(payload))
    setShowModal(false)
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
  }, [shiftOne, shiftTwo])



  console.log('selectedDates====>', selectedDates)


  const startDate = selectedDates ? selectedDates.toString() : "";



  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          {!hideBluetooth &&
            <TouchableOpacity activeOpacity={0.8} style={styles.scanButton} onPress={startScan}>
              <Text style={styles.scanButtonText}>
                {isScanning ? 'Scanning...' : 'Connect'}
              </Text>
            </TouchableOpacity>}


          {!Array.from(peripherals.values()).find((item) => item.connected) &&
            <TouchableOpacity activeOpacity={0.8}
              style={[styles.scanButton]} onPress={retrieveConnected}>
              <Text style={styles.scanButtonText}>
                Retrieve Connected Device
              </Text>
            </TouchableOpacity>
          }

          {/* {Array.from(peripherals.values()).length === 0 && (
            <View style={styles.row}>
              <Text style={styles.noPeripherals}>
                No Peripherals, press "Scan Bluetooth" above.
              </Text>
            </View>
          )} */}

          {!Array.from(peripherals.values()).find((item) => item.connected) &&
            <FlatList
              data={Array.from(peripherals.values())}
              contentContainerStyle={{ rowGap: 12 }}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />}

          {Array.from(peripherals.values()).find((item) => item.connected) &&
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <CustomButton
                text={'Load Petrol'}
                onPress={() => handleLoadPetrol(capacity)}
              />
              {calendar ?
                <View style={styles.calendarContainer}>
                  <CalendarPicker scrollable selectedDayColor={'green'} onDateChange={onDateChange} disabledDates={selectedDates} disabledDatesTextStyle={styles.disableDates}
                    textStyle={{
                      // customize font family
                      fontFamily: Fonts.Poppins600, // customize font size
                    }}
                    todayBackgroundColor="#f2f2f2" // customize today's background color
                    todayTextStyle={{ color: 'blue' }} // customize today's text color
                    selectedDayTextColor="#ffffff" // customize selected day text color
                  />
                </View>
                :
                <View>
                  {/* <Text style={{ color:}}>Todays Date: {startDate}</Text> */}
                </View>
              }






              {/* <AnimatedCircularProgress
                size={250}
                width={15}
                backgroundWidth={5}
                fill={fill}
                tintColor="green"
                tintColorSecondary="green"
                backgroundColor="#d94826"
                // arcSweepAngle={240}
                // rotation={240}
                lineCap="round">
                {fill => <Text style={styles.points}>{percentage}%</Text>}

              </AnimatedCircularProgress> */}
              <AnimatedCircularProgress
                size={250}
                width={15}
                backgroundWidth={5}
                fill={fill}
                tintColor="green"
                tintColorSecondary="green"
                backgroundColor="#d94826"
                // arcSweepAngle={240}
                // rotation={240}
                lineCap="round"
                style={styles.circularProgress}
              >
                {fill => (
                  <View style={styles.progressContainer}>
                    <Text style={styles.percentage}>{percentage}%</Text>
                  </View>
                )}
              </AnimatedCircularProgress>


              {
                (shiftOne || shiftTwo) &&
                <Pressable style={styles.buttonStyle}>
                  <Text style={styles.recordText} onPress={() => setShowModal(true)} >{shiftOne ? 'Shift One Start' : 'Shift Two Start'}</Text>
                </Pressable>
              }
              {endShift &&
                <Pressable style={styles.buttonStyle}>
                  <Text style={styles.recordText} onPress={() => calculateSale(capacity)}>
                    {shiftOne ? 'End Shift One' : 'End Shift Two'}
                  </Text>
                </Pressable>
              }


              {percentage > 80 && <Text style={[styles.titleDevices, { color: "red" }]}> CRITICAL POINT REACHED! PLEASE STOP!</Text>}
            </View>
          }

          {/* <LoadPetrolSheet /> */}
          <ConfirmationModal
            onChangeName={name => setSaleObject({ ...saleObject, supervisor_name: name })}
            leftButtonText={'Submit'}
            header={'Start Shift'}
            isVisible={showModal}
            onYes={() => {
              handleShift(capacity)
            }}
            onClose={() => {

              setShowModal(false); // Close the modal
            }}

          />

          <LoadPetrolModal
            onChangeName={name => console.log('name', name)}
            leftButtonText={'Submit'}
            header={'How much petrol is there to load?'}
            isVisible={loadPetrolSheet}
            onYes={() => handleLoad(capacity)}
            onClose={() => {

              setShowModal(false); // Close the modal
            }}

          />


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

  circularProgress: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  percentage: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
  engine: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    color: Colors.Black,
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
    color: Colors.White,
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.Black,
  },
  titleDevices: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.White,
    textAlign: 'center',
    marginVertical: 50,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.DarkGray,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.DarkGray,
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
    borderRadius: 16,
    ...boxShadow,
    marginVertical: 10,

  },
  noPeripherals: {
    margin: 10,
    textAlign: 'center',
    color: Colors.White,
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
  },
  disableDates: {
    color: Colors.Black,

    fontFamily: Fonts.Poppins800,
    padding: scale(2)


  },

  container: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),

  },
  inputStyle: {
    marginTop: 0,
    marginVertical: verticalScale(25),
    borderWidth: 1,
    borderColor: Colors.White,
    backgroundColor: Colors.White,
  },

  crossIcon: {
    position: 'absolute',
    right: 10,
    top: -20,
    borderColor: Colors.White,
    backgroundColor: Colors.White,
    borderRadius: 100,

  },
  calendarContainer: {
    backgroundColor: 'white',
    padding: 20,
  }
});

export default Inventory;