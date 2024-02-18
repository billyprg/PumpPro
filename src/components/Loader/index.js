import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, Modal, View } from 'react-native';
import { Colors } from '../../config';
import styles from './styles';

const Loader: React.FC<ActivityIndicatorProps>
    = ({ style, isModalLoader, ...props }) => {
        if (!isModalLoader) {
            return (
                <ActivityIndicator
                    {...props}
                    style={[{ backgroundColor: "transparent" }, style]}
                    animating={true}
                    color={Colors.White}
                />
            )
        }
        else {
            return (
               <Modal
                transparent={true}
                animationType={'none'}
                visible={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                        color={Colors.White}
                            // {...props}
                            animating={true}
                        />
                    </View>
                </View>
            </Modal>
            )
        }
    }

interface CustomProps {
    isModalLoader: Boolean
}

Loader.defaultProps = {
    size: "small",
    isModalLoader: false,
    color: 'White'
}

export default React.memo(Loader);