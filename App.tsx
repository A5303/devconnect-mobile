import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

// Your data
const portfolioData = {
  name: "Magdaline Kiarie",
  title: "Software Developer",
  bio: "Passionate software developer skilled in mobile development with React Native.",
  projects: [
    { 
      name: "DevConnect Mobile", 
      description: "A React Native portfolio app for developers",
      tech: ["React Native", "TypeScript", "Expo"]
    },
  ],
  skills: ["React Native", "JavaScript", "TypeScript", "Git", "Mobile Development"],
  links: {
    github: "https://github.com/A5303",
    linkedin: "https://www.linkedin.com/in/magdaline-kiarie-041848207/",
  },
  stats: {
    repositories: 15,
    followers: 8,
    following: 12
  }
};

// Welcome Screen Component
function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 DevConnect</Text>
      <Text style={styles.subtitle}>
        Your GitHub portfolio in your pocket
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Portfolio')}
      >
        <Text style={styles.buttonText}>View My Portfolio</Text>
      </TouchableOpacity>
    </View>
  );
}

// Portfolio Screen Component
function PortfolioScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{portfolioData.name}</Text>
        <Text style={styles.jobTitle}>{portfolioData.title}</Text>
        <Text style={styles.bio}>{portfolioData.bio}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{portfolioData.stats.repositories}</Text>
          <Text style={styles.statLabel}>Repos</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{portfolioData.stats.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{portfolioData.stats.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>My Projects</Text>
      {portfolioData.projects.map((project, index) => (
        <View key={index} style={styles.projectCard}>
          <Text style={styles.projectName}>{project.name}</Text>
          <Text style={styles.projectDesc}>{project.description}</Text>
          <View style={styles.techContainer}>
            {project.tech.map((tech, techIndex) => (
              <Text key={techIndex} style={styles.techTag}>{tech}</Text>
            ))}
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skillsContainer}>
        {portfolioData.skills.map((skill, index) => (
          <View key={index} style={styles.skillTag}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>

      <View style={styles.linksContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.githubButton]}
          onPress={() => Linking.openURL(portfolioData.links.github)}
        >
          <Text style={styles.buttonText}>View GitHub</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.linkedinButton]}
          onPress={() => Linking.openURL(portfolioData.links.linkedin)}
        >
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2d8cff',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 18,
    color: '#2d8cff',
    marginBottom: 15,
    fontWeight: '600',
  },
  bio: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d8cff',
  },
  statLabel: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    marginTop: 10,
  },
  projectCard: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  projectDesc: {
    fontSize: 14,
    color: '#cccccc',
    marginBottom: 12,
    lineHeight: 20,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techTag: {
    backgroundColor: '#3a3a3a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 12,
    color: '#ffffff',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  skillTag: {
    backgroundColor: '#2d8cff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  githubButton: {
    flex: 1,
    marginRight: 10,
  },
  linkedinButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#0077b5',
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Portfolio" 
          component={PortfolioScreen}
          options={{ 
            title: 'My Portfolio',
            headerStyle: { backgroundColor: '#1a1a1a' },
            headerTintColor: '#ffffff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}