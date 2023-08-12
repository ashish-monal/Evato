import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FooterSticky from '../../components/FooterSticky';
import HeaderInside from '../../components/HeaderInside';
const RefundAndCancellation = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <HeaderInside navigation={navigation} />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Refund and Cancellation Policy</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              Thank you for choosing our self-riding electric scooter service.
              We strive to provide the best experience to our customers. In the
              event that you need to cancel your reservation and request a
              refund, please familiarize yourself with our refund and
              cancellation policy outlined below:
            </Text>
            <Text style={styles.textTitle}>1. Refund Amount</Text>
            <Text style={styles.textSubtitle}>
              - We offer a refund of 90% of the total amount paid for the
              reservation.
            </Text>
            <Text style={styles.textSubtitle}>
              - The remaining 10% will be deducted to cover administrative
              costs.
            </Text>

            {/* Refund Processing Time */}
            <Text style={styles.textTitle}>2. Refund Processing Time</Text>
            <Text style={styles.textSubtitle}>
              - We aim to process refunds within 3 working days from the date of
              cancellation.
            </Text>

            {/* Cancellation and Refund Procedure */}
            <Text style={styles.textTitle}>
              3. Cancellation and Refund Procedure
            </Text>
            <Text style={styles.textSubtitle}>
              - To initiate a cancellation and refund request, please contact
              our customer support team via email or phone.
            </Text>
            <Text style={styles.textSubtitle}>
              - Provide your booking details, including the reservation ID,
              customer name, and contact information.
            </Text>
            <Text style={styles.textSubtitle}>
              - Clearly state your intention to cancel the reservation and
              request a refund.
            </Text>

            {/* Eligibility for Refund */}
            <Text style={styles.textTitle}>4. Eligibility for Refund</Text>
            <Text style={styles.textSubtitle}>
              - Refunds are only applicable for cancellations made within the
              specified cancellation period.
            </Text>
            <Text style={styles.textSubtitle}>
              - Cancellations made beyond the stipulated time frame may not be
              eligible for a refund.
            </Text>
            <Text style={styles.textSubtitle}>
              - The cancellation period may vary depending on the specific
              reservation details. Please refer to your booking confirmation for
              the applicable cancellation period.
            </Text>

            {/* Refund Method */}
            <Text style={styles.textTitle}>5. Refund Method</Text>
            <Text style={styles.textSubtitle}>
              - Refunds will be processed using the original payment method used
              during the reservation.
            </Text>
            <Text style={styles.textSubtitle}>
              - If the original payment method is no longer valid or available,
              alternative arrangements will be made in consultation with the
              customer.
            </Text>

            {/* Refund Exceptions */}
            <Text style={styles.textTitle}>5. Refund Exceptions</Text>
            <Text style={styles.textSubtitle}>
              - In exceptional cases, where circumstances beyond our control
              prevent the fulfillment of the reservation, we reserve the right
              to provide a full refund.
            </Text>
            <Text style={styles.textSubtitle}>
              - This includes situations such as severe weather conditions,
              technical issues, or unforeseen operational constraints.
            </Text>

            {/* Modification and Chnages */}
            <Text style={styles.textTitle}>7. Modifications and Changes</Text>
            <Text style={styles.textSubtitle}>
              - We understand that travel plans may change. If you need to
              modify or reschedule your reservation, please contact our customer
              support team.
            </Text>
            <Text style={styles.textSubtitle}>
              - Changes are subject to availability and may be subject to
              additional charges or fees.
            </Text>

            {/* Bottom Text or Other Text */}
            <Text style={styles.textSubtitle}>
              Please note that this refund and cancellation policy is subject to
              change without prior notice. We recommend reviewing the policy
              periodically for any updates. If you have any questions or
              concerns regarding our policy, please feel free to reach out to
              our customer support team, who will be happy to assist you.
            </Text>

            <Text style={styles.textSubtitle}>
              Company Contact Information:
            </Text>
            <Text style={styles.textSubtitle}>Evato Ride Private Limited</Text>
            <Text style={styles.textSubtitle}>
              Regus , PS Arcadia , 9th floor , 4A Abanindra Nath Thakur ,
              Parkstreet,
            </Text>
            <Text style={styles.textSubtitle}>
              Kolkata, Kolkata 700016, West Bengal
            </Text>
            <Text style={styles.textSubtitle}>contact@evato.app</Text>
            <Text style={styles.textSubtitle}>8955808099</Text>
            <Text style={styles.textSubtitle}>
              Thank you for your understanding and cooperation.
            </Text>
            {/* Back Button */}
            <TouchableOpacity style={styles.touchableOpacityBack}>
              <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FooterSticky />
    </ScrollView>
  );
};

export default RefundAndCancellation;

const styles = StyleSheet.create({
  View: {
    width: '90%',
    height: 'auto',
    marginTop: -75,
    marginHorizontal: 25,
    marginBottom: 160,
  },
  bgImage: {
    width: '100%',
    height: 75,
  },
  container: {
    backgroundColor: '#EAF4F0',
    height: 'auto',
    width: '100%',
  },
  text: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  detailsContainer: {
    margin: 20,
    marginRight: 0,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  detailsText: {
    fontSize: 18,
    color: 'gray',
  },
  textTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textSubtitle: {
    marginLeft: 10,
    margin: 5,
  },
  textSecondarySubtitle: {
    marginLeft: 25,
    marginTop: 10,
  },
  touchableOpacityBack: {
    backgroundColor: 'green',
    width: 300,
    height: 45,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
  },
  back: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});
