import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error refreshing posts:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderCard = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.postId}>Post #{item.id}</Text>
        <Text style={styles.userId}>User {item.userId}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body} numberOfLines={3}>
        {item.body}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        style={styles.container}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    marginTop: 40,
  },
  contentContainer: {
    padding: 12,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginTop: 60,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  postId: {
    fontSize: 12,
    fontWeight: "600",
    color: "#007AFF",
  },
  userId: {
    fontSize: 12,
    fontWeight: "500",
    color: "#666",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
    lineHeight: 22,
  },
  body: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  titleContainer: {
    flex: 1,
    marginTop: 60,
    backgroundColor: "#f0f0f0",
  },
  profileContainer: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#007AFF",
    paddingHorizontal: 0,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  inputSection: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 15,
    marginBottom: 8,
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 12,
    marginBottom: 15,
    color: "#333",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  itemContainer: {
    color: "#333",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    margin: 10,
  },
  itemText: {
    color: "black",
  },
  infoBox: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
    fontWeight: "500",
  },
});
