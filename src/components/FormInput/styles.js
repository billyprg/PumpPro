import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, Metrix } from "../../config";


const styles = StyleSheet.create({
    inputStyle: {
        paddingLeft: Metrix.HorizontalSize(15),
        color: Colors.Black,
        // fontFamily: Fonts["Poppins-Regular"],
        fontSize: Metrix.FontSmall,
        textAlignVertical: "center",
        letterSpacing: 0.49,
        paddingBottom: 0,
        paddingTop: Platform.OS == "android" ? Metrix.VerticalSize(2.5) : 0,

    },

    errMsgStyle: {
        letterSpacing: 0.49,
        // fontFamily: Fonts["Poppins-Medium"],
        fontSize: Metrix.FontSmall,
        color: Colors.Danger,
        marginTop: Metrix.VerticalSize(10),
        width: Metrix.HorizontalSize(300),
        alignSelf: "center",

    },
    main: {
        width: Metrix.HorizontalSize(330),
        height: Metrix.VerticalSize(60),
        borderWidth: Metrix.VerticalSize(1),
        borderColor: Colors.Border,
        borderRadius: Metrix.VerticalSize(10),
        flexDirection: "row",
        alignItems: "center",
    },
    suffixIconStyle: {
        height: Metrix.VerticalSize(14),
        width: Metrix.HorizontalSize(16),
        resizeMode: "contain",
    },
    prefixIconStyle: {
        height: Metrix.VerticalSize(14),
        width: Metrix.HorizontalSize(16),
        resizeMode: "contain",
        alignSelf: "flex-end"

    },
    suffixContainer: {
        width: "10%",
    },
    prefixContainer: {
        width: "10%",
    },
    codeTextStyle: {
        paddingVertical: 0,
        textAlignVertical: 'center',
        top: 0,
        bottom: 0,
        backgroundColor: "#F8F9FA",
        color: Colors.PlaceHolderText,
    },
    textInputStyle: {
        backgroundColor: "#F8F9FA",
        height: Metrix.VerticalSize(55),
        top: 0,
        bottom: 0,
        textAlignVertical: 'center',
        marginTop: Platform.OS == "android" ? Metrix.VerticalSize(2.1) : 0,
        color: Colors.Black,
    },
    phoneInputContainerStyle: {
        height: "100%",
        borderRadius: Metrix.VerticalSize(30),
        backgroundColor: "#EFEFEF",
    },
    phoneInputView: {
        width: Metrix.HorizontalSize(330),
        height: Metrix.VerticalSize(60),
        borderWidth: Metrix.VerticalSize(1),
        borderRadius: Metrix.VerticalSize(30),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8F9FA",
        marginTop: Metrix.VerticalSize(20),
    },
    otpTextInputStyle: {
        backgroundColor: Colors.White,
        borderRadius: Metrix.VerticalSize(15),
        borderColor: "#71828A29",
        textAlignVertical: 'center',
        top: 0,
        bottom: 0,
        paddingVertical: 0,
        borderWidth: 1,
        fontSize: 20,
        // fontFamily: Fonts['Poppins-Medium'],
        color: Colors.Black,
        flex: 1
    },
    root: { padding: 20, minHeight: 300, },
    title: { textAlign: 'center', fontSize: 30 },
    cell: {
        width: Metrix.HorizontalSize(65),
        height: Metrix.VerticalSize(54),
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: Metrix.Radius,
        borderColor: '#71828A29',
        alignSelf: 'center',
        backgroundColor: Colors.White
    },
    cellTextStyle: {
        fontSize: Metrix.customFontSize(20),
        textAlign: 'center',
        textAlignVertical: "center",
        lineHeight: Metrix.VerticalSize(54),
        color: 'black',
    },
    calenderColor: {
        title: Colors.Primary,
        range: Colors.White,
        rangeText: Colors.Primary,
        selectedDay: Colors.Primary
    },
    calenderStyle: {
        topBar: { controls: "flex-start" },
        wrapper: { width: Metrix.HorizontalSize() * 0.85 },
        dayText: { fontSize: Metrix.FontMedium }
    },
    iconContainer: {
        justifyContent: "center",
    },
    pickerContainer: {
        alignSelf: 'center',
        paddingVertical: Platform.OS === "ios" ? 22 : 0,
        paddingRight: Platform.OS === "ios" ? Metrix.HorizontalSize(25) : Metrix.HorizontalSize(15),
        width: "88%",
        borderRadius: 9,
        color: Colors.White,
        backgroundColor: Colors.InputField,
        borderColor: Colors.Primary,
        borderWidth: 1,
        opacity: 0.8,
        shadowColor: Colors.Secondary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    inputIOS: {
        fontSize: Metrix.FontSmall,
        color: Colors.Text,
        // height: metrix.customFontSize(45),
        paddingHorizontal: Metrix.HorizontalSize(14),
        textAlignVertical: "center",
        width: "100%",
        paddingRight: Metrix.HorizontalSize(30)
    },
    inputAndroid: {
        fontSize: Metrix.FontSmall,
        color: Colors.Text,
        // height: metrix.customFontSize(20),
        paddingHorizontal: Metrix.HorizontalSize(14),
        textAlignVertical: "center",
        width: "100%",
        paddingRight: Metrix.HorizontalSize(30)
    },
    placeholder: { color: Colors.LineColor }
})

export default styles