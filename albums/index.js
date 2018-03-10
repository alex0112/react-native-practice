// Import Libraries
import React from 'react';
import { AppRegistry, Text } from 'react-native';

// Create Component
const App = () => {
    return(
	<Text>Hello, World.</Text>
    );
};

// Render Component
AppRegistry.registerComponent('albums', () => App);
