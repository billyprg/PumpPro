import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import DropDownIcon from 'react-native-vector-icons/Entypo'
import { Colors, Metrix } from '../../config';
import { Platform, Text, View } from 'react-native';
import styles from './styles'
import { log } from 'console';
const DropDownInput = ({ errMsg, onChange, items, placeHolder, value }) => {

    const pickerPlaceholder = {
        label: placeHolder,
        value: null
    };
    return <>
        <View style={styles.pickerContainer} >
            <RNPickerSelect
                items={items}
                selectedValue={value}
                onValueChange={onChange}
                placeholder={pickerPlaceholder}
                style={styles}
                pickerProps={{
                    dropdownIconColor: Colors.White,
                }}
                useNativeAndroidPickerStyle={true}
                // to hide the dropdown icon on Android device, i've set it's color to white
                Icon={() => {
                    return Platform.OS === "ios" ? <DropDownIcon size={25} color={Colors.White} name="chevron-down" /> : null
                }}
            />
        </View>
        {errMsg && <Text style={styles.errMsgStyle} >{errMsg}</Text>}
    </>
}

export default React.memo(DropDownInput)