package com.shopsphere.backend.config;

import com.shopsphere.backend.model.Product;
import com.shopsphere.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.math.BigDecimal;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;

    @Override
    public void run(String... args) {
        if (productRepository.count() > 0)
            return; // don't seed twice

        List<Product> products = List.of(

                // ── MEN SHIRTS ──
                Product.builder().name("Classic Oversized Tee").description("Premium cotton oversized fit t-shirt")
                        .price(new BigDecimal("59.00")).category("men").subCategory("shirts")
                        .imageUrls(List.of("http://localhost:5173/src/assets/men/shirts/shirts_1.jpg",
                                "http://localhost:5173/src/assets/men/shirts/shirts_2.jpg"))
                        .sizes(List.of("S", "M", "L", "XL", "2XL")).colors(List.of("White", "Black", "Beige"))
                        .tags(List.of("casual", "cotton", "oversized")).rating(4.5).reviewCount(128).inStock(true)
                        .isFeatured(true).isNew(true).build(),

                Product.builder().name("Heavy Weight Crew Neck").description("400gsm heavyweight cotton crew neck")
                        .price(new BigDecimal("79.00")).category("men").subCategory("shirts")
                        .imageUrls(List.of("http://localhost:5173/src/assets/men/shirts/shirts_3.jpg",
                                "http://localhost:5173/src/assets/men/shirts/shirts_4.jpg"))
                        .sizes(List.of("S", "M", "L", "XL")).colors(List.of("Black", "Navy", "Olive"))
                        .tags(List.of("heavyweight", "streetwear")).rating(4.7).reviewCount(89).inStock(true)
                        .isFeatured(true).isNew(false).build(),

                Product.builder().name("Linen Summer Shirt").description("Breathable linen blend summer shirt")
                        .price(new BigDecimal("89.00")).discountedPrice(new BigDecimal("69.00")).category("men")
                        .subCategory("shirts")
                        .imageUrls(List.of("http://localhost:5173/src/assets/men/shirts/shirts_5.jpg",
                                "http://localhost:5173/src/assets/men/shirts/shirts_6.jpg"))
                        .sizes(List.of("S", "M", "L", "XL", "2XL")).colors(List.of("White", "Beige", "Blue"))
                        .tags(List.of("linen", "summer", "sale")).rating(4.3).reviewCount(56).inStock(true)
                        .isFeatured(false).isNew(false).build(),

                Product.builder().name("Graphic Print Tee").description("Street art graphic print on soft cotton")
                        .price(new BigDecimal("49.00")).category("men").subCategory("shirts")
                        .imageUrls(List.of("http://localhost:5173/src/assets/men/shirts/shirts_7.jpg",
                                "http://localhost:5173/src/assets/men/shirts/shirts_8.jpg"))
                        .sizes(List.of("XS", "S", "M", "L", "XL")).colors(List.of("Black", "White"))
                        .tags(List.of("graphic", "streetwear", "print")).rating(4.2).reviewCount(43).inStock(true)
                        .isFeatured(false).isNew(true).build(),

                Product.builder().name("Button Down Oxford").description("Classic oxford button down shirt")
                        .price(new BigDecimal("99.00")).category("men").subCategory("shirts")
                        .imageUrls(List.of("http://localhost:5173/src/assets/men/shirts/shirts_9.jpg",
                                "http://localhost:5173/src/assets/men/shirts/shirts_10.jpg"))
                        .sizes(List.of("S", "M", "L", "XL")).colors(List.of("White", "Blue", "Pink"))
                        .tags(List.of("formal", "oxford", "classic")).rating(4.6).reviewCount(72).inStock(true)
                        .isFeatured(true).isNew(false).build(),

                // ── MEN PANTS ──
                Product.builder().name("Slim Fit Chinos").description("Modern slim fit chino trousers")
                        .price(new BigDecimal("119.00")).category("men").subCategory("pants")
                        .imageUrls(List.of("http://localhost:5173/src/assets/men/pants/pants_1.jpg",
                                "http://localhost:5173/src/assets/men/pants/pants_2.jpg"))
                        .sizes(List.of("28", "30", "32", "34", "36")).colors(List.of("Beige", "Navy", "Olive", "Black"))
                        .tags(List.of("chino", "slim", "formal")).rating(4.4).reviewCount(95).inStock(true)
                        .isFeatured(true).isNew(false).build(),

                Product.builder().name("Cargo Wide Leg Pants").description("Utility cargo pants with wide leg cut")
                        .price(new BigDecimal("139.00")).category("men").subCategory("pants")
                        .imageUrls(List.of("http://localhost:5173/src/assets/men/pants/pants_3.jpg",
                                "http://localhost:5173/src/assets/men/pants/pants_4.jpg"))
                        .sizes(List.of("S", "M", "L", "XL")).colors(List.of("Khaki", "Black", "Olive"))
                        .tags(List.of("cargo", "utility", "wide-leg")).rating(4.5).reviewCount(61).inStock(true)
                        .isFeatured(false).isNew(true).build(),

                Product.builder().name("Denim Straight Cut").description("Classic straight cut denim jeans")
                        .price(new BigDecimal("129.00")).discountedPrice(new BigDecimal("99.00")).category("men")
                        .subCategory("pants")
                        .imageUrls(List.of("http://localhost:5173/src/assets/men/pants/pants_5.jpg",
                                "http://localhost:5173/src/assets/men/pants/pants_6.jpg"))
                        .sizes(List.of("28", "30", "32", "34", "36", "38")).colors(List.of("Blue", "Black", "Grey"))
                        .tags(List.of("denim", "jeans", "sale")).rating(4.3).reviewCount(110).inStock(true)
                        .isFeatured(false).isNew(false).build(),

                // ── WOMEN SHIRTS ──
                Product.builder().name("Linen Crop Top").description("Relaxed linen crop top for summer")
                        .price(new BigDecimal("69.00")).category("women").subCategory("shirts")
                        .imageUrls(List.of("http://localhost:5173/src/assets/women/shirts/shirts_1.jpg",
                                "http://localhost:5173/src/assets/women/shirts/shirts_2.jpg"))
                        .sizes(List.of("XS", "S", "M", "L", "XL")).colors(List.of("White", "Beige", "Sage"))
                        .tags(List.of("crop", "linen", "summer")).rating(4.6).reviewCount(143).inStock(true)
                        .isFeatured(true).isNew(true).build(),

                Product.builder().name("Silk Blend Blouse").description("Elegant silk blend blouse for all occasions")
                        .price(new BigDecimal("129.00")).category("women").subCategory("shirts")
                        .imageUrls(List.of("http://localhost:5173/src/assets/women/shirts/shirts_3.jpg",
                                "http://localhost:5173/src/assets/women/shirts/shirts_4.jpg"))
                        .sizes(List.of("XS", "S", "M", "L")).colors(List.of("Ivory", "Black", "Dusty Rose"))
                        .tags(List.of("silk", "elegant", "blouse")).rating(4.8).reviewCount(87).inStock(true)
                        .isFeatured(true).isNew(false).build(),

                Product.builder().name("Ribbed Tank Top").description("Stretchy ribbed fitted tank top")
                        .price(new BigDecimal("39.00")).category("women").subCategory("shirts")
                        .imageUrls(List.of("http://localhost:5173/src/assets/women/shirts/shirts_5.jpg",
                                "http://localhost:5173/src/assets/women/shirts/shirts_6.jpg"))
                        .sizes(List.of("XS", "S", "M", "L", "XL")).colors(List.of("White", "Black", "Brown", "Sage"))
                        .tags(List.of("ribbed", "tank", "fitted")).rating(4.4).reviewCount(201).inStock(true)
                        .isFeatured(false).isNew(true).build(),

                // ── WOMEN PANTS ──
                Product.builder().name("High Rise Wide Leg").description("Elegant high rise wide leg trousers")
                        .price(new BigDecimal("149.00")).category("women").subCategory("pants")
                        .imageUrls(List.of("http://localhost:5173/src/assets/women/pants/pants_1.jpg",
                                "http://localhost:5173/src/assets/women/pants/pants_2.jpg"))
                        .sizes(List.of("XS", "S", "M", "L", "XL")).colors(List.of("Beige", "Black", "White"))
                        .tags(List.of("wide-leg", "highrise", "elegant")).rating(4.7).reviewCount(76).inStock(true)
                        .isFeatured(true).isNew(true).build(),

                Product.builder().name("Yoga Flare Pants").description("Soft stretch yoga flare pants")
                        .price(new BigDecimal("89.00")).discountedPrice(new BigDecimal("69.00")).category("women")
                        .subCategory("pants")
                        .imageUrls(List.of("http://localhost:5173/src/assets/women/pants/pants_3.jpg",
                                "http://localhost:5173/src/assets/women/pants/pants_4.jpg"))
                        .sizes(List.of("XS", "S", "M", "L")).colors(List.of("Black", "Navy", "Mauve"))
                        .tags(List.of("yoga", "flare", "stretch", "sale")).rating(4.5).reviewCount(132).inStock(true)
                        .isFeatured(false).isNew(false).build(),

                // ── WOMEN FROCKS ──
                Product.builder().name("Floral Midi Dress").description("Flowy floral print midi dress")
                        .price(new BigDecimal("159.00")).category("women").subCategory("frocks")
                        .imageUrls(List.of("http://localhost:5173/src/assets/women/frock/frock_1.jpg",
                                "http://localhost:5173/src/assets/women/frock/frock_2.jpg"))
                        .sizes(List.of("XS", "S", "M", "L", "XL")).colors(List.of("Floral Blue", "Floral Pink"))
                        .tags(List.of("floral", "midi", "dress", "summer")).rating(4.9).reviewCount(54).inStock(true)
                        .isFeatured(true).isNew(true).build(),

                Product.builder().name("Wrap Maxi Dress").description("Elegant wrap style maxi dress")
                        .price(new BigDecimal("189.00")).category("women").subCategory("frocks")
                        .imageUrls(List.of("http://localhost:5173/src/assets/women/frock/frock_3.jpg",
                                "http://localhost:5173/src/assets/women/frock/frock_4.jpg"))
                        .sizes(List.of("XS", "S", "M", "L")).colors(List.of("Black", "Emerald", "Burgundy"))
                        .tags(List.of("maxi", "wrap", "elegant")).rating(4.8).reviewCount(38).inStock(true)
                        .isFeatured(true).isNew(false).build(),

                // ── BAGS ──
                Product.builder().name("Leather Tote Bag").description("Genuine leather large tote bag")
                        .price(new BigDecimal("249.00")).category("bags").subCategory("totes")
                        .imageUrls(List.of("http://localhost:5173/src/assets/bags/bags_1.jpg",
                                "http://localhost:5173/src/assets/bags/bags_2.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Tan", "Black", "Cognac"))
                        .tags(List.of("leather", "tote", "luxury")).rating(4.9).reviewCount(67).inStock(true)
                        .isFeatured(true).isNew(false).build(),

                Product.builder().name("Mini Crossbody").description("Compact mini crossbody bag")
                        .price(new BigDecimal("129.00")).category("bags").subCategory("crossbody")
                        .imageUrls(List.of("http://localhost:5173/src/assets/bags/bags_3.jpg",
                                "http://localhost:5173/src/assets/bags/bags_4.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Black", "White", "Red"))
                        .tags(List.of("mini", "crossbody", "compact")).rating(4.6).reviewCount(92).inStock(true)
                        .isFeatured(true).isNew(true).build(),

                Product.builder().name("Canvas Tote").description("Heavyweight canvas everyday tote")
                        .price(new BigDecimal("59.00")).category("bags").subCategory("totes")
                        .imageUrls(List.of("http://localhost:5173/src/assets/bags/bags_5.jpg",
                                "http://localhost:5173/src/assets/bags/bags_6.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Natural", "Black", "Navy"))
                        .tags(List.of("canvas", "tote", "everyday")).rating(4.3).reviewCount(155).inStock(true)
                        .isFeatured(false).isNew(false).build(),

                Product.builder().name("Structured Top Handle").description("Structured leather top handle bag")
                        .price(new BigDecimal("319.00")).discountedPrice(new BigDecimal("259.00")).category("bags")
                        .subCategory("handbags")
                        .imageUrls(List.of("http://localhost:5173/src/assets/bags/bags_7.jpg",
                                "http://localhost:5173/src/assets/bags/bags_8.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Black", "Camel"))
                        .tags(List.of("structured", "tophandle", "luxury", "sale")).rating(4.8).reviewCount(29)
                        .inStock(true).isFeatured(true).isNew(false).build(),

                // ── ACCESSORIES — WATCHES ──
                Product.builder().name("Minimal Steel Watch").description("Clean minimal dial steel bracelet watch")
                        .price(new BigDecimal("299.00")).category("accessories").subCategory("watches")
                        .imageUrls(List.of("http://localhost:5173/src/assets/watches/watches_1.jpg",
                                "http://localhost:5173/src/assets/watches/watches_2.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Silver", "Gold", "Rose Gold"))
                        .tags(List.of("watch", "minimal", "steel")).rating(4.7).reviewCount(83).inStock(true)
                        .isFeatured(true).isNew(false).build(),

                Product.builder().name("Leather Strap Watch").description("Classic leather strap dress watch")
                        .price(new BigDecimal("249.00")).category("accessories").subCategory("watches")
                        .imageUrls(List.of("http://localhost:5173/src/assets/watches/watches_3.jpg",
                                "http://localhost:5173/src/assets/watches/watches_4.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Brown", "Black"))
                        .tags(List.of("watch", "leather", "classic")).rating(4.5).reviewCount(61).inStock(true)
                        .isFeatured(false).isNew(true).build(),

                // ── ACCESSORIES — SUNGLASSES ──
                Product.builder().name("Oversized Square Frames").description("Bold oversized square sunglasses")
                        .price(new BigDecimal("89.00")).category("accessories").subCategory("sunglasses")
                        .imageUrls(List.of("http://localhost:5173/src/assets/accessories/sunglasses/sunglasses_1.jpg",
                                "http://localhost:5173/src/assets/accessories/sunglasses/sunglasses_2.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Black", "Tortoise", "Clear"))
                        .tags(List.of("sunglasses", "oversized", "square")).rating(4.4).reviewCount(117).inStock(true)
                        .isFeatured(true).isNew(true).build(),

                Product.builder().name("Aviator Gold Frame").description("Classic aviator style gold frame")
                        .price(new BigDecimal("79.00")).category("accessories").subCategory("sunglasses")
                        .imageUrls(List.of("http://localhost:5173/src/assets/accessories/sunglasses/sunglasses_3.jpg",
                                "http://localhost:5173/src/assets/accessories/sunglasses/sunglasses_4.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Gold", "Silver"))
                        .tags(List.of("aviator", "gold", "classic")).rating(4.3).reviewCount(89).inStock(true)
                        .isFeatured(false).isNew(false).build(),

                // ── ACCESSORIES — CAPS ──
                Product.builder().name("Washed Baseball Cap").description("Vintage washed cotton baseball cap")
                        .price(new BigDecimal("39.00")).category("accessories").subCategory("caps")
                        .imageUrls(List.of("http://localhost:5173/src/assets/accessories/caps/caps_1.jpg",
                                "http://localhost:5173/src/assets/accessories/caps/caps_2.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Black", "Beige", "Olive", "Navy"))
                        .tags(List.of("cap", "baseball", "washed")).rating(4.5).reviewCount(203).inStock(true)
                        .isFeatured(false).isNew(true).build(),

                // ── BEAUTY ──
                Product.builder().name("Glow Face Cream").description("Brightening vitamin C face cream")
                        .price(new BigDecimal("49.00")).category("beauty").subCategory("face_cream")
                        .imageUrls(List.of("http://localhost:5173/src/assets/beauty/face_cream/facecream_1.jpg",
                                "http://localhost:5173/src/assets/beauty/face_cream/facecream_2.jpg"))
                        .sizes(List.of("50ml", "100ml")).colors(List.of("N/A"))
                        .tags(List.of("skincare", "vitamin-c", "glow")).rating(4.6).reviewCount(178).inStock(true)
                        .isFeatured(true).isNew(false).build(),

                Product.builder().name("Velvet Lip Kit").description("Long lasting matte velvet lip kit")
                        .price(new BigDecimal("29.00")).category("beauty").subCategory("lipsticks")
                        .imageUrls(List.of("http://localhost:5173/src/assets/beauty/lipsticks/lipsticks_1.jpg",
                                "http://localhost:5173/src/assets/beauty/lipsticks/lipsticks_2.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Red", "Nude", "Berry", "Coral"))
                        .tags(List.of("lipstick", "matte", "velvet")).rating(4.4).reviewCount(231).inStock(true)
                        .isFeatured(true).isNew(true).build(),

                Product.builder().name("Pro Makeup Brush Set").description("12 piece professional makeup brush set")
                        .price(new BigDecimal("69.00")).category("beauty").subCategory("brushes")
                        .imageUrls(List.of("http://localhost:5173/src/assets/beauty/brushes/brushes_1.jpg",
                                "http://localhost:5173/src/assets/beauty/brushes/brushes_2.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Rose Gold", "Black"))
                        .tags(List.of("brushes", "makeup", "professional")).rating(4.7).reviewCount(94).inStock(true)
                        .isFeatured(false).isNew(false).build(),

                // ── ELECTRONICS ──
                Product.builder().name("Wireless Earbuds Pro").description("Active noise cancellation wireless earbuds")
                        .price(new BigDecimal("199.00")).category("electronics").subCategory("earbuds")
                        .imageUrls(List.of("http://localhost:5173/src/assets/electronics/earbuds/earbuds_1.jpg",
                                "http://localhost:5173/src/assets/electronics/earbuds/earbuds_2.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("White", "Black", "Navy"))
                        .tags(List.of("earbuds", "wireless", "anc")).rating(4.7).reviewCount(312).inStock(true)
                        .isFeatured(true).isNew(true).build(),

                Product.builder().name("Sport Headphones").description("Over ear sport headphones with bass boost")
                        .price(new BigDecimal("149.00")).discountedPrice(new BigDecimal("119.00"))
                        .category("electronics").subCategory("headphones")
                        .imageUrls(List.of("http://localhost:5173/src/assets/electronics/headphones/headphones_1.jpg",
                                "http://localhost:5173/src/assets/electronics/headphones/headphones_2.jpg"))
                        .sizes(List.of("One Size")).colors(List.of("Black", "Red", "Blue"))
                        .tags(List.of("headphones", "sport", "bass", "sale")).rating(4.5).reviewCount(187).inStock(true)
                        .isFeatured(true).isNew(false).build());

        productRepository.saveAll(products);
        System.out.println("✅ Seeded " + products.size() + " products!");
    }
}