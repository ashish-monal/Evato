import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FooterSticky from '../../components/FooterSticky';
import HeaderInside from '../../components/HeaderInside';

const PrivacyPolicy = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <HeaderInside navigation={navigation} />
      <View style={styles.View}>
        <Image
          source={require('../../assests/ovel-bg.png')}
          style={styles.bgImage}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Privacy Policy</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              Thank you for visiting Evato Ride Private Limited our website and
              using our services. This Privacy Policy explains how we collect,
              use, disclose, and protect your personal information when you
              access our website. We are committed to respecting your privacy
              and protecting your personal information in accordance with
              applicable data protection laws. By accessing our website, you
              consent to the terms of this Privacy Policy.
            </Text>
            {/* Information We Collect */}
            <Text style={styles.textTitle}>1. Information We Collect</Text>
            <Text style={styles.textSubtitle}>1.1 Personal Information</Text>
            <Text style={{marginLeft: 35}}>
              We may collect personal information that you voluntarily provide
              to us when you use our website or interact with us. This may
              include: - Contact information
            </Text>
            <Text style={{marginLeft: 45}}>
              Name - Evato Ride Private Limited
            </Text>
            <Text style={{marginLeft: 45}}>
              Email address - contact@evato.app
            </Text>
            <Text style={{marginLeft: 45, marginBottom: 10}}>
              Phone number- 8955808099
            </Text>
            <Text style={styles.textSubtitle}>1.2. Location information</Text>
            <Text style={{marginLeft: 35}}>
              Regus , PS Arcadia , 9th floor , 4A Abanindra Nath Thakur ,
              Parkstreet, Kolkata, Kolkata 700016, West Bengal
            </Text>
            <Text style={{marginLeft: 45}}>- Payment information</Text>
            <Text style={{marginLeft: 45}}>
              - Communications and correspondence with us mail id -
              evatomanagement@gmail.com
            </Text>
            <Text style={{marginLeft: 45, marginBottom: 10}}>
              - Any other personal information you choose to provide to us
              company website- evato.app
            </Text>
            <Text style={styles.textSubtitle}>
              1.3. Automatically Collected Information
            </Text>
            <Text style={{marginLeft: 35}}>
              When you visit our website, we may automatically collect certain
              information about your device, browsing actions, and patterns.
              This information may include:
            </Text>
            <Text style={{marginLeft: 45}}>- IP address</Text>
            <Text style={{marginLeft: 45}}>- Browser type and version</Text>
            <Text style={{marginLeft: 45}}>- Operating system</Text>
            <Text style={{marginLeft: 45}}>- Referring website</Text>
            <Text style={{marginLeft: 45}}>
              - Pages visited and time spent on our website
            </Text>
            <Text style={{marginLeft: 45}}>
              - Other usage information and statistical data
            </Text>
            <Text style={{marginLeft: 35}}>
              We may use cookies, web beacons, and similar technologies to
              collect this information. Please refer to our Cookie Policy for
              more details.
            </Text>

            {/* Use of Information */}
            <Text style={styles.textTitle}>2. Use of Information</Text>
            <Text style={{marginLeft: 35}}>
              We may use your personal information for the following purposes:
            </Text>
            <Text style={{marginLeft: 45}}>
              - To provide and improve our services
            </Text>
            <Text style={{marginLeft: 45}}>
              - To personalize your experience on our website
            </Text>
            <Text style={{marginLeft: 45}}>
              - To process transactions and payments
            </Text>
            <Text style={{marginLeft: 45}}>
              - To communicate with you and respond to your inquiries
            </Text>
            <Text style={{marginLeft: 45}}>
              - To send you promotional materials, updates, and newsletters with
              your consent
            </Text>
            <Text style={{marginLeft: 45}}>
              - To analyze and improve our website and services
            </Text>
            <Text style={{marginLeft: 45}}>
              - To analyze and improve our website and services
            </Text>
            <Text style={{marginLeft: 45}}>
              - To analyze and improve our website and services
            </Text>

            {/* Disclosure Information */}
            <Text style={styles.textTitle}>3. Disclosure of Information</Text>
            <Text style={{marginLeft: 35}}>
              We may share your personal information with third parties in the
              following circumstances:
            </Text>
            <Text style={{marginLeft: 45}}>
              - With your consent or as necessary to fulfill the purposes
              described in this Privacy Policy
            </Text>
            <Text style={{marginLeft: 45}}>
              - With our service providers, business partners, or other trusted
              third parties who assist us in operating our website or providing
              services to you
            </Text>
            <Text style={{marginLeft: 45}}>
              - To comply with legal obligations, such as responding to lawful
              requests, court orders, or legal processes
            </Text>
            <Text style={{marginLeft: 45}}>
              - To protect our rights, property, or safety, and that of our
              users or others
            </Text>
            <Text style={{marginLeft: 45}}>
              - In connection with a business transaction, such as a merger,
              acquisition, or sale of assets, where personal information may be
              transferred as part of the transaction We do not sell or rent your
              personal information to third parties for their marketing purposes
              without your explicit consent.
            </Text>
            {/* Data Rettention */}
            <Text style={styles.textTitle}>4. Data Retention</Text>
            <Text style={{marginLeft: 35}}>
              We will retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this Privacy Policy
              unless a longer retention period is required or permitted by law.
            </Text>

            {/* Security Measure */}
            <Text style={styles.textTitle}>5. Security Measures</Text>
            <Text style={{marginLeft: 35}}>
              We implement appropriate technical and organizational measures to
              safeguard your personal information against unauthorized access,
              disclosure, alteration, or destruction. However, no method of
              transmission over the internet or electronic storage is completely
              secure, and we cannot guarantee absolute security.
            </Text>

            {/* Your Right */}
            <Text style={styles.textTitle}>6. Your Rights</Text>
            <Text style={{marginLeft: 35}}>
              Subject to applicable laws, you may have certain rights regarding
              your personal information, including:
            </Text>
            <Text style={{marginLeft: 45}}>
              - The right to access and receive a copy of your personal
              information
            </Text>
            <Text style={{marginLeft: 45}}>
              - The right to rectify any inaccurate or incomplete personal
              information we hold about you
            </Text>
            <Text style={{marginLeft: 45}}>
              - The right to withdraw your consent at any time, if applicable
            </Text>
            <Text style={{marginLeft: 45}}>
              - The right to request the erasure of your personal information
              under certain circumstances
            </Text>
            <Text style={{marginLeft: 45}}>
              - The right to object to the processing of your personal
              information
            </Text>
            <Text style={{marginLeft: 45}}>
              - The right to restrict the processing of your personal
              information under certain circumstances
            </Text>
            <Text style={{marginLeft: 45}}>
              - The right to data portability, where applicable
            </Text>
            <Text style={{marginLeft: 35}}>
              To exercise your rights or request further information, please
              contact us using the information provided at the end of this
              Privacy Policy.
            </Text>

            {/* Third - Party Policy */}
            <Text style={styles.textTitle}>7. Third-Party Websites</Text>
            <Text style={{marginLeft: 35}}>
              Our website may contain links to third-party websites or services.
              This Privacy Policy does not apply to those websites or services.
              We encourage you to review the privacy policies of any third-party
              websites or services before providing them with your personal
              information.
            </Text>

            {/* International Data Transfer */}
            <Text style={styles.textTitle}>
              8. International Data Transfers
            </Text>
            <Text style={{marginLeft: 35}}>
              Your personal information may be transferred to and processed in
              countries outside your jurisdiction, including countries that may
              have different data protection laws than your own. We will take
              appropriate measures to ensure that such international transfers
              comply with applicable laws.
            </Text>

            {/* Update to this privacy Policy */}
            <Text style={styles.textTitle}>
              9. Updates to this Privacy Policy
            </Text>
            <Text style={{marginLeft: 35}}>
              We reserve the right to update or modify this Privacy Policy at
              any time, without prior notice, to reflect changes in our
              information practices or applicable laws. We encourage you to
              review this Privacy Policy periodically for any updates. The
              "Effective Date" at the top of this Privacy Policy indicates when
              it was last revised.
            </Text>

            {/* Contact Us */}
            <Text style={styles.textTitle}>10. Contact Us</Text>
            <Text style={{marginLeft: 35}}>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us at:
            </Text>
            <Text style={{marginLeft: 45}}>Evato Ride Private Limited</Text>
            <Text style={{marginLeft: 45}}>
              Regus , PS Arcadia , 9th floor , 4A Abanindra Nath Thakur ,
              Parkstreet,
            </Text>
            <Text style={{marginLeft: 45}}>
              Kolkata, Kolkata 700016, West Bengal
            </Text>
            <Text style={{marginLeft: 45}}>contact@evato.app</Text>
            <Text style={{marginLeft: 45}}>8955808099</Text>
            <Text style={{marginLeft: 35}}>
              Please allow us a reasonable time to respond to your inquiries.
            </Text>
            <Text style={{marginLeft: 35}}>
              By using our website, you acknowledge that you have read,
              understood, and agree to the terms of this Privacy Policy.
            </Text>
            <Text style={{marginLeft: 35}}>Last updated: 17.07.2023</Text>

            {/* Back Button */}

            <TouchableOpacity
              onPress={() => navigation.navigate('Dashboard')}
              style={styles.touchableOpacityBack}>
              <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FooterSticky />
    </ScrollView>
  );
};

export default PrivacyPolicy;

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
    width: 350,
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
