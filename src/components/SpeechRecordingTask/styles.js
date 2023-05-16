
import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  alignCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
    pickerTextStyle: {
      fontSize: 15,
      paddingLeft: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20
    },
    Title: {
      fontSize: 20,
      paddingLeft: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20,
      justifyContent: 'center',
      fontWeight: 'bold'
    },
    preview: {
        height: winWidth*0.85,
        width: winWidth*0.65,
        position: 'absolute',
        left: winWidth*0.185,
        top: 0,
        right: 0,
        bottom: 0,
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 0,
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
    galleryContainer: {
        bottom: 100
    },
    galleryImageContainer: {
        width: 75,
        height: 75,
        marginRight: 5
    },
    galleryImage: {
        width: 75,
        height: 75
    }
});
