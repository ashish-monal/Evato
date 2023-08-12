import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import FooterSticky from '../../components/FooterSticky';

const TermsAndUse = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>
            Terms of Use for Evato Self-Riding Electric Scooter
          </Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              Welcome to the Evato Self-Riding Electric Scooter Mobile App
              Evato. By accessing and using this App, you agree to comply with
              the following terms and conditions:
            </Text>
            {/* Use of the App */}
            <Text style={styles.textTitle}>1. Use of the App</Text>
            <Text style={styles.textSubtitle}>
              1.1 The App allows users to locate, rent, and ride self-riding
              electric scooters provided by Evato.
            </Text>
            <Text style={styles.textSubtitle}>
              1.2. You must be at least 18 years old to use the App and rent an
              Evato scooter.
            </Text>
            <Text style={styles.textSubtitle}>
              1.3. You agree to provide accurate and up-to-date information
              during the registration process and while using the App.
            </Text>
            <Text style={styles.textSubtitle}>
              1.4. You are responsible for maintaining the confidentiality of
              your account credentials and for all activities that occur under
              your account.
            </Text>
            {/* Rental Agreement */}
            <Text style={styles.textTitle}>2. Rental Agreement</Text>
            <Text style={styles.textSubtitle}>
              2.1. By renting an Evato scooter through the App, you enter into a
              rental agreement with Evato.
            </Text>
            <Text style={styles.textSubtitle}>
              2.2. You agree to ride the scooter responsibly, in compliance with
              local traffic laws and regulations.
            </Text>
            <Text style={styles.textSubtitle}>
              2.3. You must return the scooter to a designated drop-off point
              within the specified rental period.
            </Text>
            <Text style={styles.textSubtitle}>
              2.4. You are responsible for the scooter and its condition during
              the rental period.
            </Text>

            {/* Damage and Liability */}
            <Text style={styles.textTitle}>3. Damage and Liability</Text>

            <Text style={styles.textSubtitle}>
              3.1. In the event of damage to the scooter during your rental
              period, you will be responsible for the repair or replacement
              costs, subject to the following conditions:
            </Text>
            <Text style={styles.textSecondarySubtitle}>
              3.1.1. Evato will deduct the required amount from your Evato
              wallet to cover a portion of the repair or replacement costs.
            </Text>
            <Text style={styles.textSecondarySubtitle}>
              3.1.2. If the repair or replacement costs exceed the amount
              available in your Evato wallet, you will be responsible for
              bearing 90% of the remaining cost.
            </Text>
            <Text style={styles.textSecondarySubtitle}>
              3.1.3. If you refuse to pay the 90% of the cost, legal action may
              be taken to recover the outstanding amount.
            </Text>

            <Text style={styles.textSubtitle}>
              3.2. The damage costs will apply to the following parts of the
              scooter (but are not limited to):
            </Text>
            <Text style={styles.textSecondarySubtitle}>3.2.1. Headlight</Text>
            <Text style={styles.textSecondarySubtitle}>3.2.2. Indicator</Text>
            <Text style={styles.textSecondarySubtitle}>
              3.2.3. Shock absorber
            </Text>
            <Text style={styles.textSecondarySubtitle}>
              3.2.4. Rearview mirror
            </Text>
            <Text style={styles.textSecondarySubtitle}>3.2.5. Mudguard</Text>
            <Text style={styles.textSecondarySubtitle}>
              3.2.6. Body scratches
            </Text>
            <Text style={styles.textSecondarySubtitle}>3.2.7. Helmet</Text>
            <Text style={styles.textSecondarySubtitle}>3.2.8. Seat</Text>
            <Text style={styles.textSecondarySubtitle}>3.2.9. Battery</Text>

            {/* Personal Safety */}
            <Text style={styles.textTitle}>4. Personal Safety</Text>
            <Text style={styles.textSubtitle}>
              4.1. You are responsible for your own safety and must comply with
              all applicable safety regulations and laws.
            </Text>
            <Text style={styles.textSubtitle}>
              4.2. It is strongly recommended to wear a helmet and other
              protective gear while riding an Evato scooter.
            </Text>

            {/* Limitation of Liability */}
            <Text style={styles.textTitle}>5. Limitations of Liability</Text>
            <Text style={styles.textSubtitle}>
              5.1. Evato shall not be held liable for any injuries, damages, or
              losses resulting from the use of the App or the rental and
              operation of the scooters, except in cases of gross negligence or
              willful misconduct.
            </Text>
            <Text style={styles.textSubtitle}>
              5.2. Evato is not responsible for any accidents, thefts, or
              damages that occur during your rental period.
            </Text>
            <Text style={styles.textSubtitle}>
              5.3. Evato shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising out of or
              in connection with the use of the App or the rental of scooters.
            </Text>

            {/* Termination */}
            <Text style={styles.textTitle}>6. Termination</Text>
            <Text style={styles.textSubtitle}>
              6.1. Evato reserves the right to terminate or suspend your access
              to the App at any time without prior notice.
            </Text>
            <Text style={styles.textSubtitle}>
              6.2. You may terminate your use of the App by ceasing to use it
              and deleting the App from your device.
            </Text>

            {/* Changes to the Terms of Use */}
            <Text style={styles.textTitle}>7. Changes to the Terms of Use</Text>
            <Text style={styles.textSubtitle}>
              7.1. Evato may modify or update these Terms of Use from time to
              time.
            </Text>
            <Text style={styles.textSubtitle}>
              7.2. It is your responsibility to review the Terms of Use
              periodically for any changes.
            </Text>

            {/* Governing Law and Dispute Resolution */}
            <Text style={styles.textTitle}>
              8. Governing Law and Dispute Resolution{' '}
            </Text>
            <Text style={styles.textSubtitle}>
              8.1. These Terms of Use shall be governed by and construed in
              accordance with the laws of India.
            </Text>
            <Text style={styles.textSubtitle}>
              8.2. Any disputes arising out of or in connection with these Terms
              of Use shall be subject to the exclusive jurisdiction of the
              courts of India.
            </Text>

            <Text style={styles.detailsText}>
              By using the Evato Self-Riding Electric Scooter Mobile App, you
              acknowledge that you have read, understood, and agreed to these
              Terms of Use. If you do not agree to these terms, please refrain
              from using the App.
            </Text>
          </View>
        </View>
      </View>
      <FooterSticky />
    </ScrollView>
  );
};

export default TermsAndUse;

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
});
