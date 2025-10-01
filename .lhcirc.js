module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:5000/products/single-toggle-jaw-crusher',
        'http://localhost:5000/products/double-toggle-jaw-crusher',
        'http://localhost:5000/products/vsi-cubisand-sand-maker',
        'http://localhost:5000/products/hsi-impactors',
        'http://localhost:5000/products/inclined-vibrating-screens'
      ],
      startServerCommand: 'npm start',
      startServerReadyPattern: 'serving on port',
      startServerReadyTimeout: 30000,
      numberOfRuns: 1,
      settings: {
        onlyCategories: ['performance', 'accessibility', 'best-practices'],
        formFactor: 'mobile',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0
        }
      }
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.75 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 1500 }],
        'total-blocking-time': ['error', { maxNumericValue: 500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }]
      }
    },
    upload: {
      target: 'temporary-public-storage',
    }
  }
};