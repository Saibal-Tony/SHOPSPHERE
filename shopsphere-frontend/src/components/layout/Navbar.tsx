// Add this import at top of Navbar.tsx
import { useCart } from "../../context/CartContext";

// Inside Navbar function, add:
const { totalItems } = useCart();

// Replace the hardcoded "0" badge with:
{
  totalItems > 0 && (
    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gray-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
      {totalItems > 9 ? "9+" : totalItems}
    </span>
  );
}
