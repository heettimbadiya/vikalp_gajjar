module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:5000/products/single-toggle-jaw-crusher',
        'http://localhost:5000/products/double-toggle-jaw-crusher',
        'http://localhost:5000/products/vsi-cubisand-sand-maker'
      ],
      startServerCommand: 'npm start',
      startServerReadyPattern: 'serving on port',
      startServerReadyTimeout: 30000,
      numberOfRuns: 3,
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
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 1500 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }]
      }
    },
    upload: {
      target: 'temporary-public-storage',
    }
  }
};