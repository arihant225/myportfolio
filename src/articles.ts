export const articles:IArticle[]=[{
    "title": "Things I Have Changed from Writing Messy Code to Writing Manageable Code",
    "intro": "While implementing requirements, we often end up writing code that is hard to manage and prone to runtime issues. However, a few practices have completely changed my perspective on writing code. Here are the things I follow now to ensure my code is manageable and efficient.",
    "tips": [
      {
        "title": "Implementation of a Generic & Uniform Solution Through Your UI",
        "description": "Breaking your code into reusable components helps save time, reduce errors, and improve efficiency.",
        "points": [
          {
            "point_title": "Design reusable components",
            "intuition": "When you notice the same implementation recurring throughout the UI, create a separate component and reuse it.",
            "reasoning": "Fixing bugs in duplicated code is time-consuming and error-prone. Reusable components ensure consistency and maintainability.",
            "example": "I implemented a generic form component that provides fields, performs validation, and is JSON-driven. It reduced bugs and improved efficiency."
          },
          {
            "point_title": "Create a reusable table component",
            "intuition": "Recognize patterns like data tables with similar functionalities across screens.",
            "reasoning": "Updating individual tables with new features takes more effort. A single, configurable component streamlines this process.",
            "example": "I designed a table component with props for sorting, filtering, and pagination. Updates to the core component automatically reflected across the application."
          }
        ]
      },
      {
        "title": "Centralizing Enums and Classes for Common Functionality",
        "description": "Centralizing values and functions in enums or utility classes ensures uniformity, reduces redundancy, and improves code maintainability.",
        "points": [
          {
            "point_title": "Create centralized enums for status codes",
            "intuition": "Instead of defining values like status codes in each component, create an enum for consistency.",
            "reasoning": "Hardcoding values in multiple places leads to inconsistency. Centralized enums simplify maintenance and ensure uniform updates.",
            "example": "I created a `StatusEnum` for status codes and labels, so all components accessed them from a single location, ensuring consistency across the app."
          },
          {
            "point_title": "Use utility classes for common functions",
            "intuition": "Centralize functions like date formatting and validation in utility classes to avoid duplication.",
            "reasoning": "Duplication of functions across components increases maintenance complexity. Centralizing logic in utility classes improves readability and reusability.",
            "example": "I created a utility class for date formatting and validation, which was imported wherever needed, making the codebase cleaner and reducing redundancy."
          }
        ]
      },
      {
        "title": "Using Setters with Inputs to Modify Values Dynamically",
        "description": "Using setters for input properties allows handling changes dynamically and independently, resulting in cleaner code.",
        "points": [
          {
            "point_title": "Use setters for each input property",
            "intuition": "Instead of overloading the `ngOnChanges` lifecycle method, use setters for better modularity.",
            "reasoning": "Overloading `ngOnChanges` with all logic makes it harder to maintain. Using setters isolates logic and improves maintainability.",
            "example": "In one project, I used setters to handle changes for each input property, improving readability and reducing complexity in the component."
          }
        ]
      },
      {
        "title": "Introducing Directives and Pipes for Common Functionalities",
        "description": "Directives and pipes allow for encapsulating common logic, reducing repetition and improving maintainability across components.",
        "points": [
          {
            "point_title": "Create custom directives for common validation",
            "intuition": "Instead of repeating validation logic in each component, create a reusable directive to manage it.",
            "reasoning": "Directives allow for isolated functionality that can be reused across components, reducing duplication and ensuring consistency.",
            "example": "I implemented a custom validation directive that applied rules across various components, reducing repetitive logic and ensuring consistent validation."
          },
          {
            "point_title": "Implement pipes for common formatting",
            "intuition": "Use pipes to format data consistently across the application rather than implementing the same logic in each component.",
            "reasoning": "Pipes provide a clean, reusable way to format data, reducing duplication and ensuring consistency.",
            "example": "I created a custom pipe to format dates across the app, ensuring a consistent date format and reducing repetitive code."
          }
        ]
      },
      {
        "title": "Managing Module Functionality Inside a Component Instead of the Parent",
        "description": "Encapsulating module functionality within a child component reduces dependencies on the parent and improves modularity.",
        "points": [
          {
            "point_title": "Encapsulate functionality in child components",
            "intuition": "Instead of relying on `ViewChild` and `ViewChildren` for communication, manage functionality within the child components themselves.",
            "reasoning": "Reducing dependencies on the parent component lowers the risk of runtime errors and increases component modularity.",
            "example": "I refactored a child component to handle its own functionality and state, reducing dependencies on the parent and minimizing runtime errors."
          }
        ]
      }
    ]
}]
  
export interface IArticle{
    title:string,
    intro:string,
    tips:Array<{
        title:string,
        description?:string,
        points:Array<{
          point_title:string,
          intuition:string,
          reasoning:string,
          example:string
        }>
    }>
}