import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const BasicPage = () => {
    return (
    <View style={styles.container}>
    {/* Your page content goes here */}
            
        {/* Circular add button */}
        <TouchableOpacity style={styles.addButton}>
        {/* Add button icon */}
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Additional styles for your page container
        // ...
    },
    addButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        // Additional styles for your add button
        // ...
    },
});

export default BasicPage;