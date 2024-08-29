import Items from "./Items"

export function getItemsFromCategory(category: string) {
  return Items.filter((item) => item.categoryName === category);
}

export function getLatest(len=10) {
    const randomItems: typeof Items = [];
    const totalItems: number = Items.length;
    const itemIndex:number[] = []
    
    while (randomItems.length < len) {
        const randomIndex: number = Math.floor(Math.random() * totalItems);
        const randomItem = Items[randomIndex];
        
        if (!itemIndex.includes(randomIndex)) {
            itemIndex.push(randomIndex);
            randomItems.push(randomItem);
        }
    }
    
    return randomItems;
}


export function getProductFromId(id: number) {
  return Items.find((item) => item.id === id);
}


export function searchItems(query: string) {
  const lowerCaseQuery = query.toLowerCase();
  return Items.filter((item) => {
    return (
      item.name.toLowerCase().includes(lowerCaseQuery) ||
      item.categoryName.toLowerCase().includes(lowerCaseQuery)
    );
  });
}