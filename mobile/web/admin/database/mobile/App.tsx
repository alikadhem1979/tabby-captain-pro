
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>TABBY CAPTAIN PRO</Text>
        <Text style={styles.subtitle}>تطبيق الكابتن</Text>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>حالة الكابتن</Text>
        <Text style={styles.status}>غير متصل</Text>

        <TouchableOpacity style={styles.onlineButton}>
          <Text style={styles.buttonText}>
            تفعيل الاتصال
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>ملخص اليوم</Text>

        <View style={styles.row}>
          <Text style={styles.label}>عدد الرحلات</Text>
          <Text style={styles.value}>0</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>الأرباح اليومية</Text>
          <Text style={styles.value}>0 د.ع</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>التقييم</Text>
          <Text style={styles.value}>5.0 ★</Text>
        </View>
      </View>

      <View style={styles.tripCard}>
        <Text style={styles.sectionTitle}>
          الطلبات الجديدة
        </Text>
        <Text style={styles.empty}>
          لا توجد طلبات رحلات حالياً
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          TABBY CAPTAIN PRO © 2026
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101827",
    padding: 20
  },
  header: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30
  },
  logo: {
    color: "#35D0A0",
    fontSize: 23,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 17,
    marginTop: 8
  },
  statusCard: {
    backgroundColor: "#1D2A3D",
    padding: 22,
    borderRadius: 18,
    alignItems: "center"
  },
  statusTitle: {
    color: "#FFFFFF",
    fontSize: 18
  },
  status: {
    color: "#F5B942",
    fontSize: 25,
    fontWeight: "bold",
    margin: 15
  },
  onlineButton: {
    backgroundColor: "#168B6A",
    padding: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16
  },
  infoCard: {
    backgroundColor: "#1D2A3D",
    padding: 20,
    borderRadius: 18,
    marginTop: 20
  },
  sectionTitle: {
    color: "#35D0A0",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 18
  },
  row: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 15
  },
  label: {
    color: "#C5CDDA",
    fontSize: 15
  },
  value: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16
  },
  tripCard: {
    backgroundColor: "#1D2A3D",
    padding: 20,
    borderRadius: 18,
    marginTop: 20,
    flex: 1
  },
  empty: {
    color: "#AAB5C5",
    textAlign: "center",
    marginTop: 20
  },
  footer: {
    alignItems: "center",
    padding: 15
  },
  footerText: {
    color: "#78869A",
    fontSize: 11
  }
});
