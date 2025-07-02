import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function generateImageArray(thumbnail, image) {
  const isArr = Array.isArray(image);

  let images = [];

  if (isArr) {
    const imgs = image?.map((img) => img?.url);

    images = [thumbnail, ...imgs];
  } else {
    images = [thumbnail, image[1]?.url];
  }

  return images;
}

// ------------------------------------

export function formatPrice(amount) {
  const priceString = parseFloat(amount).toFixed(2);

  return priceString;
}

// --------------------------------------

export const formatAttributes = (attributes) => {
  if (!attributes || typeof attributes !== "object") return "";

  return Object.entries(attributes)
    .map(([key, value]) => {
      const formattedKey = key;
      const formattedValue =
        typeof value === "string"
          ? value
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          : value;
      return `${formattedKey}: ${formattedValue}`;
    })
    .join(", ");
};

// -------------------------------------------------
export function formatProductVariations(variations) {
  return variations.map((variation) => {
    const attrs = {};
    (variation.variation_attributes || []).forEach((attr) => {
      const name = attr?.attribute?.name || attr?.attribute_name || "Unknown";
      const value =
        attr?.attribute_option?.attribute_value ||
        attr?.attribute_value ||
        "N/A";
      attrs[name] = value;
    });

    return {
      id: variation.id,
      sku: variation.sku,
      barcode: variation.barcode,
      regular_price: variation.regular_price,
      discount_price: variation.discount_price,
      image: variation.image,
      total_stock_qty: variation.total_stock_qty,
      variation_attributes: attrs,
    };
  });
}

// ------------------------------------------
