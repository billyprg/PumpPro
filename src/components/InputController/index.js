import React, { useState } from 'react';
import FormInput from '../FormInput';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View } from 'react-native';
import moment from 'moment';

const InputController = ({keyboardType, disabledInput, onCancel, visible, items, dropDown, datePicker, suffixIcon, secureTextEntry, control, errors, defaultValues, containerStyle, inputStyle, name, placeHolder }) => {
    const [dateValue, setDateValue] = useState(null)
    return !dropDown ? <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <FormInput.TextField
                disabledInput={disabledInput}
                onChangeText={onChange}
                placeholder={placeHolder}
                containerStyle={containerStyle}
                suffixDisabled={true}
                value={value}
                secureTextEntry={secureTextEntry}
                suffixIcon={suffixIcon}
                errMsg={errors[name]?.message}
                keyboardType={keyboardType}
                inputStyle={inputStyle} />
        )}
        name={name}
        defaultValue={defaultValues[name]}
    /> : (!datePicker ? <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <FormInput.DropDownInput
                items={items}
                onChange={onChange}
                placeHolder={placeHolder}
                value={value}
                errMsg={errors[name]?.message}
            />
        )}
        name={name}
        defaultValue={defaultValues[name]}
    /> : 
    null
    // <Controller
    //     control={control}
    //     render={({ field: { onChange, onBlur, value } }) => (
    //         <View style={{ marginBottom: 10 }} >
    //             <FormInput.DatePickerInput
    //                 visible={visible}
    //                 onConfirm={(selectedDate) => {
    //                     onChange(selectedDate);
    //                     onCancel(selectedDate);
    //                 }}
    //                 onCancel={onCancel}
    //                 errMsg={errors[name]?.message}
    //             />
    //             <FormInput.TextField
    //                 placeholder={placeHolder}
    //                 containerStyle={containerStyle}
    //                 suffixDisabled={true}
    //                 value={value && moment(value).format("DD MMM YYYY")}
    //                 disabledInput
    //                 secureTextEntry={secureTextEntry}
    //                 suffixIcon={suffixIcon}
    //                 errMsg={errors[name]?.message}
    //                 errorStyle={{ marginBottom: 0, marginTop: 0 }}
    //                 inputStyle={inputStyle} />
    //         </View>
    //     )}
    //     name={name}
    //     defaultValue={defaultValues[name]}
    // />
    
    
    )
}

export default React.memo(InputController)