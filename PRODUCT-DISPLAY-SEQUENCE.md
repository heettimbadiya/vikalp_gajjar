# Product Display Sequence on /products Page

## Current Product Display Order (11 Total Products)

Based on the `productCategories` array in `/client/src/pages/products.tsx`, here is the exact sequence in which products are displayed:

### 1. **Single Toggle Jaw Crushers** (ID: 1)
- **Category**: Crushers
- **Slug**: `single-toggle-jaw-crusher`
- **Models**: 3
- **Image**: `/images/products/single-toggle-jaw-crusher.jpg`

### 2. **Double Toggle Jaw Crushers** (ID: 2)
- **Category**: Crushers  
- **Slug**: `double-toggle-jaw-crusher`
- **Models**: 4
- **Image**: `/images/products/double-toggle-jaw-crusher.jpg`

### 3. **HSI Impactors** (ID: 3)
- **Category**: Crushers
- **Slug**: `hsi-impactors`
- **Models**: 3
- **Image**: `/images/products/hsi-impactors.jpg`

### 4. **Inclined Vibrating Screens** (ID: 4)
- **Category**: Screening
- **Slug**: `inclined-vibrating-screens`
- **Models**: 4
- **Image**: `/images/products/inclined-vibrating-screens.jpg`

### 5. **Hydrocyclone Sand Classifiers** (ID: 6)
- **Category**: Washing
- **Slug**: `hydrocyclone-sand-classifiers`
- **Models**: 3
- **Image**: `/images/products/Hydrocyclone Sand Classifiers.png`

### 6. **Bucket Sand Classifiers** (ID: 8)
- **Category**: Washing
- **Slug**: `bucket-sand-classifiers`
- **Models**: 3
- **Image**: `/images/products/bucket-elevators.jpg`

### 7. **Conveyor Systems** (ID: 5)
- **Category**: Material Handling
- **Slug**: `conveyor-systems`
- **Models**: 3
- **Image**: `/images/products/Conveyor Systems.jpeg`

### 8. **Vibrating Feeders** (ID: 8)
- **Category**: Feeding
- **Slug**: `feeder`
- **Models**: 4
- **Image**: `/images/products/Vibrating Feeders.png`

### 9. **VSI (CubiSand) Sand Maker** (ID: 9)
- **Category**: Crushers
- **Slug**: `vsi-cubisand-sand-maker`
- **Models**: 3
- **Image**: `/images/products/vsi-cubisand-sand-maker.jpg`

### 10. **Screw Sand Washers** (ID: 10)
- **Category**: Washing
- **Slug**: `screw-sand-washers`
- **Models**: 3
- **Image**: `/images/products/Screw Sand Washers.jpeg`

### 11. **Mobile Crushing Plant** (ID: 11)
- **Category**: Mobile
- **Slug**: `mobile-crushing-plant`
- **Models**: 3
- **Image**: `/images/products/mobile-crushing-plant.jpg`

## Category Breakdown

- **Crushers**: 4 products (Single Toggle, Double Toggle, HSI Impactors, VSI Sand Maker)
- **Screening**: 1 product (Inclined Vibrating Screens)
- **Washing**: 3 products (Hydrocyclone, Bucket Classifiers, Screw Washers)
- **Material Handling**: 1 product (Conveyor Systems)
- **Feeding**: 1 product (Vibrating Feeders)
- **Mobile**: 1 product (Mobile Crushing Plant)

## Notes

- Products are displayed in the exact order defined in the array (lines 23-136 in products.tsx)
- Each product card now has the entire card clickable (not just the "View Details" button)
- Grid layout is responsive: 1 column on mobile, 2 on tablet, 3 on desktop, 4 on extra large screens
- Filter buttons allow viewing by category or "All" products