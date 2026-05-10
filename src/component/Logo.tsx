import { StyleSheet, View } from "react-native";

export default function Logo() {
	return (
		<View style={styles.container}>
			<View style={styles.vertical} />

			<View style={styles.middleRow}>
				<View style={styles.horizontal} />
				<View style={styles.horizontal} />
			</View>

			<View style={styles.vertical} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
        marginTop : 40,
        marginBottom : 20
	},

	vertical: {
		width: 16,
		height: 24,
		backgroundColor: "#7ED321",
		borderRadius: 20,
	},

	horizontal: {
		width: 24,
		height: 16,
		backgroundColor: "#7ED321",
		borderRadius: 20,
	},

	middleRow: {
		flexDirection: "row",
		marginVertical: -2,
		gap: 8,
	},
});
