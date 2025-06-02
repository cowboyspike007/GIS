# AMP Geosolutions Portfolio Management

## How to Add New Portfolio Items

1. **Open the file**: `/src/data/portfolioData.js`

2. **Add new portfolio item**: Copy the template at the bottom of the file and fill in your project details:

```javascript
{
  title: "Your Project Name",
  description: "Detailed description of what you did, challenges solved, and results achieved.",
  image: "https://your-image-url.com/image.jpg",
  category: "Residential", // Choose from: Residential, Commercial, Infrastructure, Government, Environmental, Industrial
  location: "Where the project was located",
  projectSize: "Size/scope of project (e.g., '50 acres', '2 miles', '10 buildings')",
  completionDate: "2024",
  services: ["Drone Survey", "DGPS Survey", "Topographic Mapping"] // List all services you provided
}
```

3. **Where to get images**:
   - **Free stock photos**: Unsplash.com, Pexels.com
   - **Your own photos**: Upload to your hosting service and use the URL
   - **Search tips**: "aerial survey", "construction site", "land development", "topographic map"

4. **Save the file** - Changes will appear immediately on your website

## Example: Adding a Government Project

```javascript
{
  title: "Municipal Water System Survey",
  description: "Comprehensive mapping of existing water infrastructure for city planning department including pipe locations, elevation data, and access point documentation.",
  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
  category: "Government",
  location: "City of Springfield",
  projectSize: "12 mile network",
  completionDate: "2024",
  services: ["DGPS Survey", "Utility Mapping", "Drone Survey"]
}
```

## Tips for Great Portfolio Items

- **Be specific** in descriptions - mention exact services, challenges, and results
- **Use professional images** that showcase the type of work
- **Include project scope** - size, duration, complexity
- **Highlight different service types** to show your full capabilities
- **Keep descriptions concise** but informative (2-3 sentences)

## Categories Guide

- **Residential**: Housing developments, private property surveys, subdivisions
- **Commercial**: Office buildings, retail centers, industrial facilities  
- **Infrastructure**: Roads, bridges, utilities, transportation projects
- **Government**: Municipal projects, federal contracts, public works
- **Environmental**: Environmental assessments, conservation projects
- **Industrial**: Manufacturing facilities, energy projects, mining

## Services List

Use these exact service names for consistency:
- Drone Survey
- DGPS Survey
- Topographic Mapping
- Boundary Survey
- Construction Layout
- Utility Mapping
- Environmental Assessment
- Site Planning
- As-Built Survey