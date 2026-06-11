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
        if (productRepository.count() > 0) return;

        List<Product> products = List.of(

            // ── MEN SHIRTS ──
            Product.builder()
                .name("Classic Oversized Tee")
                .description("Premium 400gsm cotton oversized fit t-shirt, perfect for everyday wear.")
                .price(new BigDecimal("1299.00"))
                .category("men").subCategory("shirts")
                .imageUrls(List.of("/assets/men/shirts/shirts_1.jpg", "/assets/men/shirts/shirts_2.jpg"))
                .sizes(List.of("S","M","L","XL","2XL"))
                .colors(List.of("White","Black","Beige"))
                .tags(List.of("casual","cotton","oversized"))
                .rating(4.5).reviewCount(128).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Heavy Weight Crew Neck")
                .description("Heavyweight 400gsm cotton crew neck sweatshirt.")
                .price(new BigDecimal("1799.00"))
                .category("men").subCategory("shirts")
                .imageUrls(List.of("/assets/men/shirts/shirts_3.jpg", "/assets/men/shirts/shirts_4.jpg"))
                .sizes(List.of("S","M","L","XL"))
                .colors(List.of("Black","Navy","Olive"))
                .tags(List.of("heavyweight","streetwear"))
                .rating(4.7).reviewCount(89).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Linen Summer Shirt")
                .description("Breathable linen blend button-up summer shirt.")
                .price(new BigDecimal("2199.00")).discountedPrice(new BigDecimal("1699.00"))
                .category("men").subCategory("shirts")
                .imageUrls(List.of("/assets/men/shirts/shirts_5.jpg", "/assets/men/shirts/shirts_6.jpg"))
                .sizes(List.of("S","M","L","XL","2XL"))
                .colors(List.of("White","Beige","Blue"))
                .tags(List.of("linen","summer","sale"))
                .rating(4.3).reviewCount(56).inStock(true).isFeatured(false).isNew(false).build(),

            Product.builder()
                .name("Graphic Street Tee")
                .description("Street art graphic print on premium soft cotton.")
                .price(new BigDecimal("999.00"))
                .category("men").subCategory("shirts")
                .imageUrls(List.of("/assets/men/shirts/shirts_7.jpg", "/assets/men/shirts/shirts_8.jpg"))
                .sizes(List.of("XS","S","M","L","XL"))
                .colors(List.of("Black","White"))
                .tags(List.of("graphic","streetwear"))
                .rating(4.2).reviewCount(43).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Oxford Button Down")
                .description("Classic oxford weave button-down dress shirt.")
                .price(new BigDecimal("2499.00"))
                .category("men").subCategory("shirts")
                .imageUrls(List.of("/assets/men/shirts/shirts_9.jpg", "/assets/men/shirts/shirts_10.jpg"))
                .sizes(List.of("S","M","L","XL"))
                .colors(List.of("White","Blue","Pink"))
                .tags(List.of("formal","oxford","classic"))
                .rating(4.6).reviewCount(72).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Vintage Washed Tee")
                .description("Soft vintage washed effect cotton tee.")
                .price(new BigDecimal("899.00"))
                .category("men").subCategory("shirts")
                .imageUrls(List.of("/assets/men/shirts/shirts_11.jpg", "/assets/men/shirts/shirts_12.jpg"))
                .sizes(List.of("S","M","L","XL"))
                .colors(List.of("Faded Black","Washed Blue","Grey"))
                .tags(List.of("vintage","washed","casual"))
                .rating(4.4).reviewCount(61).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Polo Club Shirt")
                .description("Classic pique cotton polo shirt with embroidered logo.")
                .price(new BigDecimal("1599.00"))
                .category("men").subCategory("shirts")
                .imageUrls(List.of("/assets/men/shirts/shirts_13.jpg", "/assets/men/shirts/shirts_14.jpg"))
                .sizes(List.of("S","M","L","XL","2XL"))
                .colors(List.of("Navy","White","Forest Green"))
                .tags(List.of("polo","classic","smart-casual"))
                .rating(4.5).reviewCount(94).inStock(true).isFeatured(false).isNew(false).build(),

            // ── MEN PANTS ──
            Product.builder()
                .name("Slim Fit Chinos")
                .description("Modern slim fit chino trousers in stretch cotton.")
                .price(new BigDecimal("2799.00"))
                .category("men").subCategory("pants")
                .imageUrls(List.of("/assets/men/pants/pants_1.jpg", "/assets/men/pants/pants_2.jpg"))
                .sizes(List.of("28","30","32","34","36"))
                .colors(List.of("Beige","Navy","Olive","Black"))
                .tags(List.of("chino","slim","formal"))
                .rating(4.4).reviewCount(95).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Cargo Wide Leg")
                .description("Utility cargo pants with wide leg relaxed cut.")
                .price(new BigDecimal("3299.00"))
                .category("men").subCategory("pants")
                .imageUrls(List.of("/assets/men/pants/pants_3.jpg", "/assets/men/pants/pants_4.jpg"))
                .sizes(List.of("S","M","L","XL"))
                .colors(List.of("Khaki","Black","Olive"))
                .tags(List.of("cargo","utility","wide-leg"))
                .rating(4.5).reviewCount(61).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Denim Straight Cut")
                .description("Classic straight cut denim jeans in rigid denim.")
                .price(new BigDecimal("2999.00")).discountedPrice(new BigDecimal("2299.00"))
                .category("men").subCategory("pants")
                .imageUrls(List.of("/assets/men/pants/pants_5.jpg", "/assets/men/pants/pants_6.jpg"))
                .sizes(List.of("28","30","32","34","36","38"))
                .colors(List.of("Blue","Black","Grey"))
                .tags(List.of("denim","jeans","sale"))
                .rating(4.3).reviewCount(110).inStock(true).isFeatured(false).isNew(false).build(),

            Product.builder()
                .name("Jogger Sweatpants")
                .description("Comfortable cotton blend tapered jogger pants.")
                .price(new BigDecimal("1999.00"))
                .category("men").subCategory("pants")
                .imageUrls(List.of("/assets/men/pants/pants_7.jpg", "/assets/men/pants/pants_8.jpg"))
                .sizes(List.of("S","M","L","XL","2XL"))
                .colors(List.of("Grey","Black","Navy"))
                .tags(List.of("jogger","comfort","casual"))
                .rating(4.6).reviewCount(78).inStock(true).isFeatured(true).isNew(false).build(),

            // ── WOMEN SHIRTS ──
            Product.builder()
                .name("Linen Crop Top")
                .description("Relaxed linen crop top with dropped shoulders.")
                .price(new BigDecimal("1499.00"))
                .category("women").subCategory("shirts")
                .imageUrls(List.of("/assets/women/shirts/shirts_1.jpg", "/assets/women/shirts/shirts_2.jpg"))
                .sizes(List.of("XS","S","M","L","XL"))
                .colors(List.of("White","Beige","Sage"))
                .tags(List.of("crop","linen","summer"))
                .rating(4.6).reviewCount(143).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Silk Blend Blouse")
                .description("Elegant silk blend blouse with button front closure.")
                .price(new BigDecimal("2999.00"))
                .category("women").subCategory("shirts")
                .imageUrls(List.of("/assets/women/shirts/shirts_3.jpg", "/assets/women/shirts/shirts_4.jpg"))
                .sizes(List.of("XS","S","M","L"))
                .colors(List.of("Ivory","Black","Dusty Rose"))
                .tags(List.of("silk","elegant","blouse"))
                .rating(4.8).reviewCount(87).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Ribbed Fitted Tank")
                .description("Stretchy ribbed jersey fitted tank top.")
                .price(new BigDecimal("799.00"))
                .category("women").subCategory("shirts")
                .imageUrls(List.of("/assets/women/shirts/shirts_5.jpg", "/assets/women/shirts/shirts_6.jpg"))
                .sizes(List.of("XS","S","M","L","XL"))
                .colors(List.of("White","Black","Brown","Sage"))
                .tags(List.of("ribbed","fitted","casual"))
                .rating(4.4).reviewCount(201).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Oversized Knit Top")
                .description("Cozy oversized knit sweater top.")
                .price(new BigDecimal("2199.00"))
                .category("women").subCategory("shirts")
                .imageUrls(List.of("/assets/women/shirts/shirts_7.jpg", "/assets/women/shirts/shirts_8.jpg"))
                .sizes(List.of("XS","S","M","L"))
                .colors(List.of("Cream","Camel","Grey"))
                .tags(List.of("knit","oversized","cozy"))
                .rating(4.7).reviewCount(112).inStock(true).isFeatured(true).isNew(false).build(),

            // ── WOMEN PANTS ──
            Product.builder()
                .name("High Rise Wide Leg")
                .description("Elegant high rise wide leg tailored trousers.")
                .price(new BigDecimal("3499.00"))
                .category("women").subCategory("pants")
                .imageUrls(List.of("/assets/women/pants/pants_1.jpg", "/assets/women/pants/pants_2.jpg"))
                .sizes(List.of("XS","S","M","L","XL"))
                .colors(List.of("Beige","Black","White"))
                .tags(List.of("wide-leg","highrise","elegant"))
                .rating(4.7).reviewCount(76).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Yoga Flare Pants")
                .description("Soft 4-way stretch yoga flare pants.")
                .price(new BigDecimal("1999.00")).discountedPrice(new BigDecimal("1599.00"))
                .category("women").subCategory("pants")
                .imageUrls(List.of("/assets/women/pants/pants_3.jpg", "/assets/women/pants/pants_4.jpg"))
                .sizes(List.of("XS","S","M","L"))
                .colors(List.of("Black","Navy","Mauve"))
                .tags(List.of("yoga","flare","stretch","sale"))
                .rating(4.5).reviewCount(132).inStock(true).isFeatured(false).isNew(false).build(),

            Product.builder()
                .name("Satin Wide Trousers")
                .description("Luxurious satin finish wide leg trousers.")
                .price(new BigDecimal("2799.00"))
                .category("women").subCategory("pants")
                .imageUrls(List.of("/assets/women/pants/pants_5.jpg", "/assets/women/pants/pants_6.jpg"))
                .sizes(List.of("XS","S","M","L","XL"))
                .colors(List.of("Champagne","Black","Dusty Blue"))
                .tags(List.of("satin","luxury","party"))
                .rating(4.8).reviewCount(58).inStock(true).isFeatured(true).isNew(true).build(),

            // ── WOMEN FROCKS ──
            Product.builder()
                .name("Floral Midi Dress")
                .description("Flowy floral print chiffon midi dress.")
                .price(new BigDecimal("3799.00"))
                .category("women").subCategory("frocks")
                .imageUrls(List.of("/assets/women/frock/frock_1.jpg", "/assets/women/frock/frock_2.jpg"))
                .sizes(List.of("XS","S","M","L","XL"))
                .colors(List.of("Floral Blue","Floral Pink"))
                .tags(List.of("floral","midi","dress","summer"))
                .rating(4.9).reviewCount(54).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Wrap Maxi Dress")
                .description("Elegant wrap style maxi dress in crepe fabric.")
                .price(new BigDecimal("4499.00"))
                .category("women").subCategory("frocks")
                .imageUrls(List.of("/assets/women/frock/frock_3.jpg", "/assets/women/frock/frock_4.jpg"))
                .sizes(List.of("XS","S","M","L"))
                .colors(List.of("Black","Emerald","Burgundy"))
                .tags(List.of("maxi","wrap","elegant"))
                .rating(4.8).reviewCount(38).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Mini Slip Dress")
                .description("Satin finish mini slip dress with adjustable straps.")
                .price(new BigDecimal("2299.00"))
                .category("women").subCategory("frocks")
                .imageUrls(List.of("/assets/women/frock/frock_5.jpg", "/assets/women/specials/specials_1.jpg"))
                .sizes(List.of("XS","S","M","L"))
                .colors(List.of("Champagne","Black","Blush"))
                .tags(List.of("slip","mini","party","satin"))
                .rating(4.6).reviewCount(71).inStock(true).isFeatured(false).isNew(true).build(),

            // ── BAGS ──
            Product.builder()
                .name("Leather Tote Bag")
                .description("Full grain genuine leather large tote bag.")
                .price(new BigDecimal("5999.00"))
                .category("bags").subCategory("totes")
                .imageUrls(List.of("/assets/bags/bags_1.jpg", "/assets/bags/bags_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Tan","Black","Cognac"))
                .tags(List.of("leather","tote","luxury"))
                .rating(4.9).reviewCount(67).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Mini Crossbody")
                .description("Compact pebbled leather mini crossbody bag.")
                .price(new BigDecimal("2999.00"))
                .category("bags").subCategory("crossbody")
                .imageUrls(List.of("/assets/bags/bags_3.jpg", "/assets/bags/bags_4.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black","White","Red"))
                .tags(List.of("mini","crossbody","compact"))
                .rating(4.6).reviewCount(92).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Canvas Everyday Tote")
                .description("Heavyweight canvas everyday carry tote.")
                .price(new BigDecimal("1299.00"))
                .category("bags").subCategory("totes")
                .imageUrls(List.of("/assets/bags/bags_5.jpg", "/assets/bags/bags_6.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Natural","Black","Navy"))
                .tags(List.of("canvas","tote","everyday"))
                .rating(4.3).reviewCount(155).inStock(true).isFeatured(false).isNew(false).build(),

            Product.builder()
                .name("Structured Top Handle")
                .description("Structured leather top handle handbag.")
                .price(new BigDecimal("7999.00")).discountedPrice(new BigDecimal("6499.00"))
                .category("bags").subCategory("handbags")
                .imageUrls(List.of("/assets/bags/bags_7.jpg", "/assets/bags/bags_8.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black","Camel"))
                .tags(List.of("structured","tophandle","luxury","sale"))
                .rating(4.8).reviewCount(29).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Bucket Bag")
                .description("Drawstring bucket bag in soft nappa leather.")
                .price(new BigDecimal("3499.00"))
                .category("bags").subCategory("bucket")
                .imageUrls(List.of("/assets/bags/bags_9.jpg", "/assets/bags/bags_10.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Tan","Black","Burgundy"))
                .tags(List.of("bucket","drawstring","casual"))
                .rating(4.5).reviewCount(44).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Chain Shoulder Bag")
                .description("Quilted chain strap shoulder bag.")
                .price(new BigDecimal("4299.00"))
                .category("bags").subCategory("shoulder")
                .imageUrls(List.of("/assets/bags/bags_11.jpg", "/assets/bags/bags_12.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black","Gold","Silver"))
                .tags(List.of("chain","quilted","evening"))
                .rating(4.7).reviewCount(63).inStock(true).isFeatured(true).isNew(false).build(),

            // ── FOOTWEAR ──
            Product.builder()
                .name("Chunky Sole Sneakers")
                .description("Platform chunky sole fashion sneakers.")
                .price(new BigDecimal("3999.00"))
                .category("footwear").subCategory("sneakers")
                .imageUrls(List.of("/assets/footwear/shoes_1.jpg", "/assets/footwear/shoes_2.jpg"))
                .sizes(List.of("36","37","38","39","40","41","42","43","44"))
                .colors(List.of("White","Black","Beige"))
                .tags(List.of("sneakers","chunky","platform"))
                .rating(4.6).reviewCount(189).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Leather Derby Shoes")
                .description("Classic smooth leather derby formal shoes.")
                .price(new BigDecimal("4999.00"))
                .category("footwear").subCategory("formal")
                .imageUrls(List.of("/assets/footwear/shoes_3.jpg", "/assets/footwear/shoes_4.jpg"))
                .sizes(List.of("38","39","40","41","42","43","44","45"))
                .colors(List.of("Black","Dark Brown","Oxblood"))
                .tags(List.of("derby","leather","formal"))
                .rating(4.7).reviewCount(94).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Slip On Loafers")
                .description("Penny loafer slip on shoes in soft leather.")
                .price(new BigDecimal("3499.00")).discountedPrice(new BigDecimal("2799.00"))
                .category("footwear").subCategory("loafers")
                .imageUrls(List.of("/assets/footwear/shoes_5.jpg", "/assets/footwear/shoes_6.jpg"))
                .sizes(List.of("36","37","38","39","40","41","42","43"))
                .colors(List.of("Tan","Black","Navy"))
                .tags(List.of("loafer","slip-on","casual","sale"))
                .rating(4.4).reviewCount(76).inStock(true).isFeatured(false).isNew(false).build(),

            Product.builder()
                .name("High Top Canvas")
                .description("Classic high top canvas sneakers.")
                .price(new BigDecimal("2499.00"))
                .category("footwear").subCategory("sneakers")
                .imageUrls(List.of("/assets/footwear/shoes_7.jpg", "/assets/footwear/shoes_8.jpg"))
                .sizes(List.of("36","37","38","39","40","41","42","43","44"))
                .colors(List.of("White","Black","Red"))
                .tags(List.of("canvas","high-top","retro"))
                .rating(4.5).reviewCount(231).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Ankle Boots")
                .description("Genuine leather chelsea ankle boots.")
                .price(new BigDecimal("5499.00"))
                .category("footwear").subCategory("boots")
                .imageUrls(List.of("/assets/footwear/shoes_9.jpg", "/assets/footwear/shoes_10.jpg"))
                .sizes(List.of("36","37","38","39","40","41","42"))
                .colors(List.of("Black","Dark Brown"))
                .tags(List.of("boots","chelsea","leather"))
                .rating(4.8).reviewCount(58).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Running Pro Shoes")
                .description("Lightweight mesh running shoes with cushioned sole.")
                .price(new BigDecimal("4299.00"))
                .category("footwear").subCategory("sports")
                .imageUrls(List.of("/assets/footwear/shoes_11.jpg", "/assets/footwear/shoes_12.jpg"))
                .sizes(List.of("38","39","40","41","42","43","44","45"))
                .colors(List.of("Black/White","Blue/White","Red/Black"))
                .tags(List.of("running","sports","mesh"))
                .rating(4.6).reviewCount(143).inStock(true).isFeatured(true).isNew(true).build(),

            // ── WATCHES ──
            Product.builder()
                .name("Minimal Steel Watch")
                .description("Clean minimal dial with polished steel bracelet.")
                .price(new BigDecimal("7999.00"))
                .category("accessories").subCategory("watches")
                .imageUrls(List.of("/assets/watches/watches_1.jpg", "/assets/watches/watches_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Silver","Gold","Rose Gold"))
                .tags(List.of("watch","minimal","steel"))
                .rating(4.7).reviewCount(83).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Leather Strap Watch")
                .description("Classic leather strap dress watch with date display.")
                .price(new BigDecimal("5999.00"))
                .category("accessories").subCategory("watches")
                .imageUrls(List.of("/assets/watches/watches_3.jpg", "/assets/watches/watches_4.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Brown","Black"))
                .tags(List.of("watch","leather","classic"))
                .rating(4.5).reviewCount(61).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Chronograph Sports Watch")
                .description("Stainless steel chronograph sports watch.")
                .price(new BigDecimal("9999.00")).discountedPrice(new BigDecimal("7999.00"))
                .category("accessories").subCategory("watches")
                .imageUrls(List.of("/assets/watches/watches_5.jpg", "/assets/watches/watches_6.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black","Blue","Silver"))
                .tags(List.of("chronograph","sports","steel","sale"))
                .rating(4.8).reviewCount(47).inStock(true).isFeatured(true).isNew(false).build(),

            // ── ACCESSORIES — SUNGLASSES ──
            Product.builder()
                .name("Oversized Square Frames")
                .description("Bold oversized square acetate sunglasses.")
                .price(new BigDecimal("1999.00"))
                .category("accessories").subCategory("sunglasses")
                .imageUrls(List.of("/assets/accessories/sunglasses/sunglasses_1.jpg", "/assets/accessories/sunglasses/sunglasses_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black","Tortoise","Clear"))
                .tags(List.of("sunglasses","oversized","square"))
                .rating(4.4).reviewCount(117).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Aviator Gold Frame")
                .description("Classic teardrop aviator with gold metal frame.")
                .price(new BigDecimal("1799.00"))
                .category("accessories").subCategory("sunglasses")
                .imageUrls(List.of("/assets/accessories/sunglasses/sunglasses_3.jpg", "/assets/accessories/sunglasses/sunglasses_4.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Gold","Silver","Gunmetal"))
                .tags(List.of("aviator","gold","classic"))
                .rating(4.3).reviewCount(89).inStock(true).isFeatured(false).isNew(false).build(),

            Product.builder()
                .name("Round Retro Shades")
                .description("Vintage inspired round lens retro sunglasses.")
                .price(new BigDecimal("1499.00"))
                .category("accessories").subCategory("sunglasses")
                .imageUrls(List.of("/assets/accessories/sunglasses/sunglasses_5.jpg", "/assets/accessories/sunglasses/sunglasses_6.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Brown","Black","Green"))
                .tags(List.of("round","retro","vintage"))
                .rating(4.5).reviewCount(73).inStock(true).isFeatured(false).isNew(true).build(),

            // ── ACCESSORIES — CAPS ──
            Product.builder()
                .name("Washed Baseball Cap")
                .description("Vintage washed cotton twill baseball cap.")
                .price(new BigDecimal("899.00"))
                .category("accessories").subCategory("caps")
                .imageUrls(List.of("/assets/accessories/caps/caps_1.jpg", "/assets/accessories/caps/caps_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black","Beige","Olive","Navy"))
                .tags(List.of("cap","baseball","washed"))
                .rating(4.5).reviewCount(203).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Bucket Hat")
                .description("Reversible cotton canvas bucket hat.")
                .price(new BigDecimal("799.00"))
                .category("accessories").subCategory("caps")
                .imageUrls(List.of("/assets/accessories/caps/caps_3.jpg", "/assets/accessories/caps/caps_4.jpg"))
                .sizes(List.of("S/M","L/XL"))
                .colors(List.of("Khaki","Black","White"))
                .tags(List.of("bucket","hat","summer"))
                .rating(4.3).reviewCount(88).inStock(true).isFeatured(false).isNew(false).build(),

            // ── ACCESSORIES — JEWELLERY ──
            Product.builder()
                .name("Gold Chain Necklace")
                .description("18k gold plated Cuban link chain necklace.")
                .price(new BigDecimal("2499.00"))
                .category("accessories").subCategory("necklaces")
                .imageUrls(List.of("/assets/accessories/necklaces/necklaces_1.jpg", "/assets/accessories/necklaces/necklaces_2.jpg"))
                .sizes(List.of("40cm","45cm","50cm"))
                .colors(List.of("Gold","Silver","Rose Gold"))
                .tags(List.of("necklace","gold","chain"))
                .rating(4.6).reviewCount(134).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Statement Ring Set")
                .description("Set of 5 adjustable gold statement rings.")
                .price(new BigDecimal("1299.00"))
                .category("accessories").subCategory("rings")
                .imageUrls(List.of("/assets/accessories/rings/rings_1.jpg", "/assets/accessories/rings/rings_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Gold","Silver"))
                .tags(List.of("rings","set","statement"))
                .rating(4.4).reviewCount(97).inStock(true).isFeatured(false).isNew(true).build(),

            // ── BEAUTY ──
            Product.builder()
                .name("Vitamin C Glow Cream")
                .description("Brightening vitamin C face cream with SPF 30.")
                .price(new BigDecimal("1199.00"))
                .category("beauty").subCategory("face_cream")
                .imageUrls(List.of("/assets/beauty/face_cream/facecream_1.jpg", "/assets/beauty/face_cream/facecream_2.jpg"))
                .sizes(List.of("50ml","100ml"))
                .colors(List.of("N/A"))
                .tags(List.of("skincare","vitamin-c","spf"))
                .rating(4.6).reviewCount(178).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Hyaluronic Serum")
                .description("Deep hydration hyaluronic acid face serum.")
                .price(new BigDecimal("1499.00"))
                .category("beauty").subCategory("face_cream")
                .imageUrls(List.of("/assets/beauty/face_cream/facecream_3.jpg", "/assets/beauty/face_cream/facecream_4.jpg"))
                .sizes(List.of("30ml","50ml"))
                .colors(List.of("N/A"))
                .tags(List.of("serum","hyaluronic","hydration"))
                .rating(4.7).reviewCount(224).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Velvet Matte Lipstick")
                .description("Long lasting velvet matte finish lipstick.")
                .price(new BigDecimal("699.00"))
                .category("beauty").subCategory("lipsticks")
                .imageUrls(List.of("/assets/beauty/lipsticks/lipsticks_1.jpg", "/assets/beauty/lipsticks/lipsticks_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Red","Nude","Berry","Coral","Plum"))
                .tags(List.of("lipstick","matte","velvet"))
                .rating(4.4).reviewCount(231).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Pro Brush Set 12pc")
                .description("12 piece professional vegan makeup brush set.")
                .price(new BigDecimal("1699.00"))
                .category("beauty").subCategory("brushes")
                .imageUrls(List.of("/assets/beauty/brushes/brushes_1.jpg", "/assets/beauty/brushes/brushes_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Rose Gold","Black"))
                .tags(List.of("brushes","makeup","professional"))
                .rating(4.7).reviewCount(94).inStock(true).isFeatured(false).isNew(false).build(),

            Product.builder()
                .name("Luxury Body Oil")
                .description("Nourishing botanical blend luxury body oil.")
                .price(new BigDecimal("999.00"))
                .category("beauty").subCategory("body_oil")
                .imageUrls(List.of("/assets/beauty/body_oil/bodyoil_1.jpg", "/assets/beauty/body_oil/bodyoil_2.jpg"))
                .sizes(List.of("100ml","200ml"))
                .colors(List.of("N/A"))
                .tags(List.of("body","oil","luxury","skincare"))
                .rating(4.5).reviewCount(67).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Eyeshadow Palette")
                .description("24 shade neutral eyeshadow palette.")
                .price(new BigDecimal("1899.00"))
                .category("beauty").subCategory("palette")
                .imageUrls(List.of("/assets/beauty/palette/palette_1.jpg", "/assets/beauty/palette/palette_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("N/A"))
                .tags(List.of("palette","eyeshadow","neutral"))
                .rating(4.8).reviewCount(156).inStock(true).isFeatured(true).isNew(true).build(),

            // ── ELECTRONICS ──
            Product.builder()
                .name("Pro Wireless Earbuds")
                .description("Active noise cancellation wireless earbuds, 30hr battery.")
                .price(new BigDecimal("4999.00"))
                .category("electronics").subCategory("earbuds")
                .imageUrls(List.of("/assets/electronics/earbuds/earbuds_1.jpg", "/assets/electronics/earbuds/earbuds_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("White","Black","Navy"))
                .tags(List.of("earbuds","wireless","anc"))
                .rating(4.7).reviewCount(312).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Gaming Headset RGB")
                .description("7.1 surround sound RGB gaming headset.")
                .price(new BigDecimal("3999.00")).discountedPrice(new BigDecimal("2999.00"))
                .category("electronics").subCategory("headset")
                .imageUrls(List.of("/assets/electronics/headset/headset_1.jpg", "/assets/electronics/headset/headset_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black/Red","White/Blue","Black"))
                .tags(List.of("gaming","headset","rgb","sale"))
                .rating(4.5).reviewCount(187).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Mechanical Keyboard")
                .description("TKL mechanical keyboard with RGB backlight.")
                .price(new BigDecimal("5999.00"))
                .category("electronics").subCategory("keyboards")
                .imageUrls(List.of("/assets/electronics/keyboards/keyboards_1.jpg", "/assets/electronics/keyboards/keyboards_2.jpg"))
                .sizes(List.of("TKL","Full Size"))
                .colors(List.of("Black","White","Space Grey"))
                .tags(List.of("mechanical","keyboard","rgb","gaming"))
                .rating(4.8).reviewCount(143).inStock(true).isFeatured(true).isNew(true).build(),

            Product.builder()
                .name("Gaming Console Bundle")
                .description("Next gen gaming console with 2 controllers.")
                .price(new BigDecimal("49999.00"))
                .category("electronics").subCategory("consoles")
                .imageUrls(List.of("/assets/electronics/consoles/consoles_1.jpg", "/assets/electronics/consoles/consoles_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black","White"))
                .tags(List.of("console","gaming","nextgen"))
                .rating(4.9).reviewCount(89).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("Mirrorless Camera")
                .description("24MP mirrorless camera with 4K video.")
                .price(new BigDecimal("54999.00")).discountedPrice(new BigDecimal("44999.00"))
                .category("electronics").subCategory("camera")
                .imageUrls(List.of("/assets/electronics/camera/camera_1.jpg", "/assets/electronics/camera/camera_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("Black","Silver"))
                .tags(List.of("camera","mirrorless","4k","sale"))
                .rating(4.8).reviewCount(67).inStock(true).isFeatured(true).isNew(false).build(),

            Product.builder()
                .name("VR Headset Pro")
                .description("Standalone VR headset with 4K display per eye.")
                .price(new BigDecimal("34999.00"))
                .category("electronics").subCategory("VR")
                .imageUrls(List.of("/assets/electronics/VR/VR_1.jpg", "/assets/electronics/VR/VR_2.jpg"))
                .sizes(List.of("One Size"))
                .colors(List.of("White","Black"))
                .tags(List.of("vr","headset","gaming","immersive"))
                .rating(4.6).reviewCount(44).inStock(true).isFeatured(false).isNew(true).build(),

            Product.builder()
                .name("Ultrabook Laptop")
                .description("Thin and light ultrabook with 16hr battery, OLED display.")
                .price(new BigDecimal("79999.00")).discountedPrice(new BigDecimal("69999.00"))
                .category("electronics").subCategory("laptops")
                .imageUrls(List.of("/assets/electronics/laptops/laptops_1.jpg", "/assets/electronics/laptops/laptops_2.jpg"))
                .sizes(List.of("13 inch","15 inch"))
                .colors(List.of("Space Grey","Silver","Midnight Blue"))
                .tags(List.of("laptop","ultrabook","oled","sale"))
                .rating(4.7).reviewCount(112).inStock(true).isFeatured(true).isNew(true).build()
        );

        productRepository.saveAll(products);
        System.out.println("✅ Seeded " + products.size() + " products successfully!");
    }
}