import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from 'expo-router';
import colors from '../../../constants/colors';
const {width, height} = Dimensions.get('window');
import { setItem } from '../../../utils/asyncStorage';

function OnboardingFlow() {

    const navigation = useNavigation();
    const complete = async () => {
       await setItem('isOnboarded', '1');
       navigation.navigate('index' as never);
    };
    return (
        <View style={styles.container}>
            <Onboarding
            containerStyles={{padding: 15}}
            onDone={complete}
            onSkip={complete}
                pages={[
                    {
                    backgroundColor: colors.secondary,
                    image: <LottieView source={require('../../../assets/lottie/onboarding1.json')} style={styles.img} autoPlay loop />,
                    title: 'Welcome to Little Lemon',
                    subtitle: 'Find the wide range of food items and simply order!',
                    },
                    {
                        backgroundColor: colors.primary,
                        image: <LottieView source={require('../../../assets/lottie/onboarding4.json')} style={styles.img} autoPlay loop />,
                        title: '30 Minutes Delivery',
                        subtitle: 'Our delivery partner will get your food delivered!',
                    },
                    {
                        backgroundColor: colors.secondaryOrange,
                        image: <LottieView source={require('../../../assets/lottie/onboarding3.json')} style={styles.img} autoPlay loop />,
                        title: 'Enjoy the Food',
                        subtitle: 'Get your order at doorstep!',
                    }
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -60
    },
    img: {
        height: width,
        width: width * 0.9
    }
});

export default OnboardingFlow;