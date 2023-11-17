// import React, { useRef, useState } from "react";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import styles from './styles'
// import { Colors } from "../../config";
// const DatePickerInput = ({ visible, onConfirm, onCancel }) => {
//   const [date, setDate] = useState(new Date())
//   const [open, setOpen] = useState(true)

//   const onDateConfirm = () => {
//     onCancel()
//     return onConfirm()
//   }
//   return (
//     <DateTimePickerModal
//       isVisible={visible}
//       mode="date"
//       onConfirm={onConfirm}
//       onCancel={onCancel}
//     />
//   )
// }

// export default React.memo(DatePickerInput)