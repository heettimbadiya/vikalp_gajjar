module.exports = {
  extends: ['@tailwindcss/typography'],
  rules: {
    // Ensure consistent color usage
    'color-named': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    
    // Spacing consistency
    'declaration-block-single-line-max-declarations': 1,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    
    // Class order
    'order/properties-alphabetical-order': true,
    
    // Custom rules for VTIS Industrial design system
    'custom-property-pattern': [
      '^(blue|gray|white|black)-(\\d{2,3}|50)$',
      {
        message: 'Use design system colors (blue-600, gray-50, etc.)'
      }
    ],
    
    // Ensure accessibility compliance
    'a11y/media-has-caption': true,
    'a11y/no-outline-none': true,
    
    // Performance optimizations
    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand-property-no-redundant-values': true
  },
  
  // Custom checks for specs table styling
  plugins: [
    function({ addUtilities, addComponents, e, prefix, config }) {
      // Validate specs table classes
      const specsTableClasses = {
        '.specs-table-row': {
          '&:hover': {
            'background-color': config('theme.colors.blue.50')
          }
        },
        '.specs-table-header': {
          'background-color': config('theme.colors.blue.600'),
          'color': config('theme.colors.white'),
          'position': 'sticky',
          'top': '0'
        },
        '.specs-mobile-card': {
          'border-radius': config('theme.borderRadius.lg'),
          'box-shadow': config('theme.boxShadow.DEFAULT'),
          'padding': config('theme.spacing.4')
        }
      };
      
      addComponents(specsTableClasses);
    }
  ]
};