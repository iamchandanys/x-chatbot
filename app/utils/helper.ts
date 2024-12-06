export const getClientAndProductId = (): {
  clientId: string;
  productId: string;
} => {
  // Get the client and product IDs from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  // Default values are provided as legacy fallbacks
  const clientId =
    urlParams.get("clientId") || "ae87240b-d0b8-4ea1-b3a1-7f4e7caef0f4";
  // Default values are provided as legacy fallbacks
  const productId =
    urlParams.get("productId") || "b46a6bc5-b7ad-48c8-bbbb-259082522ac6";
  return { clientId, productId };
};
