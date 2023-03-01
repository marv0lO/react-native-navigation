import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function  renderCategoryItem(item) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} numColumns={2}/>;
}

function CategoriesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />
}

export default CategoriesScreen;