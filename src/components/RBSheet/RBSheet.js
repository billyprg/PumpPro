import { StyleSheet } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import React, { useEffect, useRef } from 'react';
import { Metrix } from '../../config';

const BottomSheet = ({
    bottomSheetVisible,
    onCloseReq,
    children,
    bottomSheetContainerStyle,
    backgroundColor = 'rgba(0,0,0,.6)',
    IconStyle = {},
    closeOnPressMask = true,
    onOpen
}) => {

    const RbSheetRef = useRef();
    useEffect(() => {
        if (bottomSheetVisible) RbSheetRef.current.open()
        else RbSheetRef.current.close()
    }, [bottomSheetVisible]);

    return (
        <>
            <RBSheet
                // keyboardAvoidingViewEnabled
                animationType="fade"
                customStyles={{
                    container: { ...styles.container, ...bottomSheetContainerStyle },
                    wrapper: { backgroundColor: backgroundColor },
                    draggableIcon: { ...IconStyle }

                }}
                closeOnDragDown={false}
                dragFromTopOnly
                // closeOnPressMask={closeOnPressMask}
                onClose={onCloseReq}
                ref={RbSheetRef}
                onOpen={onOpen}
            >
                {children}
            </RBSheet>
        </>
    )
}

export default BottomSheet;

const styles = StyleSheet.create({

    container: {
        borderTopLeftRadius: Metrix.VerticalSize(30),
        borderTopRightRadius: Metrix.VerticalSize(30),
        height: 'auto',
        paddingVertical: Metrix.VerticalSize(30)
    }
})