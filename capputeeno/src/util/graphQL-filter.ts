import { FilterPriority } from "@/types/filter-priority";
import { FilterType } from "@/types/filter-types";

export function getCategoryByType(type: FilterType) {
    switch (type) {
        case FilterType.MUG:
            return "mugs";
            break;
        case FilterType.SHIRT:
            return "t-shirts";
        default:
            break;
    }
}

export function getPrioritySortFields(priority: FilterPriority) {
    switch (priority) {
        case FilterPriority.NOVIDADES:
            return {
                field: "created_at",
                order: "DSC",
            };
        case FilterPriority.PRECO_MAIOR:
            return {
                field: "price_in_cents",
                order: "DSC",
            };
        case FilterPriority.PRECO_MENOR:
            return {
                field: "price_in_cents",
                order: "ASC",
            };
        case FilterPriority.MAIS_VENDIDOS:
            return {
                field: "sales",
                order: "DSC",
            };
        default:
            return {
                field: "",
                order: "",
            };
    }
}

export function generateQuery(type: FilterType, priority: FilterPriority) {
    return `
                query {
                    allProducts 
                    ${
                        type === FilterType.ALL
                            ? `(${generateSortQuery(priority)})`
                            : `(filter: { category: "${getCategoryByType(
                                  type
                              )}"},${generateSortQuery(priority)})`
                    }{
                        id
                        name
                        price_in_cents
                        image_url
                        category
                    }
                }
            `;
}
const generateSortQuery = (priority: FilterPriority) => {
    const { field, order } = getPrioritySortFields(priority);
    return `
      sortField: "${field}",
      sortOrder: "${order}"
    `;
};
