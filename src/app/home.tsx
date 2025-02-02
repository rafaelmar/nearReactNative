import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { Categories, CategoriesProps } from "@/components/categories";

import { api } from "@/api/api";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");

  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Error ao carregar as categorias");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
    </View>
  );
}
