interface IExp{
    company:string,
    designation:string,
    present?:boolean,
    from:Date,
    to?:Date
    experienceSummary:ExpSummary[]
}
interface ExpSummary{
    from:Date,
    to?:Date,
    tags:string[],
    description:string[],
    title:string,
    isPresentlyWorking?:boolean
}
export const myExperiences:IExp[]=[
    {
        company:"Infosys",
        designation:"System Engineer",
        present:false,
        from:new Date("08/25/2022") ,
        to:new Date("08/31/2024") ,
     
        experienceSummary:[
            {
                from:new Date("08/25/2022"), 
                to:new Date("01/31/2023"),
                title:"System Engineer - Training",
                description:[
                    "Gained hands-on experience with Java, C#, Angular, .NET, SQL Server, and Entity Framework through a rigorous four-month training program.",
                    "Applied these technologies to real-world projects, covering both front-end and back-end development tasks.",
                    "Developed strong problem-solving abilities by tackling complex challenges and building functional applications.",
                    "Significantly advanced my career by acquiring the expertise needed to excel as a full-stack developer."
                  ],
                tags:["Java","C#","Angular",".NET","SQL Server","Entity Framework"]
            },
            {
                from:new Date("02/01/2023"), 
                to:new Date("04/31/2024"),
                title:"Projects",
                description: [
                    "Developed and implemented robust code solutions using Angular and .NET, ensuring clean and efficient execution of features.",
                    "Created dynamic and scalable UI components with Angular, allowing for flexible and responsive user interfaces.",
                    "Built generic forms with comprehensive validation logic using Angular, enhancing user input reliability and application stability.",
                    "Designed and wrote APIs with .NET, facilitating seamless data exchange and integration between front-end and back-end systems.",
                    "Integrated Stripe payment gateway, providing secure and efficient transaction processing within applications.",
                    "Wrote and optimized stored procedures using SQL Server Management Studio (SSMS), improving database performance and management.",
                    "Implemented real-time features using SignalR, enabling live updates and interactive elements within applications."
                  ],
                tags:["C#","Angular",".NET","SQL Server","Entity Framework"]
            },
            {
                from:new Date("06/01/2023"), 
                to:new Date("08/31/2024"),
                title:"Bridge Specialist Programmer - Training",
                description: [
                    "Implemented microservices architecture using Java Spring, enabling scalable and modular application development.",
                    "Developed the front end with React, creating dynamic and responsive user interfaces.",
                    "Utilized Spring JPA as the persistence layer to manage data interactions effectively.",
                    "Integrated MongoDB for database management, ensuring efficient handling of non-relational data.",
                    "Built fully functional social sites, showcasing end-to-end development capabilities.",
                    "Implemented JWT (JSON Web Tokens) for secure authentication and authorization.",
                    "Applied various filters and additional features to enhance the security and functionality of the applications."
                  ],
                tags:["Java","Spring boot","React","Microservices"]
            }
        ]
    },
    {
        company:"Infosys",
        designation:"Specialist Programmer",
        present:true,
        from:new Date("09/01/2024"),
        experienceSummary:[
            {
                from:new Date("09/01/2024"),
                title:"Specialist Programmer - L1",
                description:[
                    "Engineered and deployed a centralized authentication service supporting unified, token-based access across multiple client platforms, streamlining security protocols through a single endpoint",
                    "Refactored Angular components to improve code clarity, modularity, and performance, resulting in a more maintainable and optimized frontend architecture",
                    "Optimized SQL stored procedures to enhance system responsiveness, delivering faster query execution and improved backend efficiency",
                    "Facilitated cross-regional collaboration by maintaining seamless communication between offshore and onshore teams, resolving blockers and aligning project goals",
                    "Architected a JSON-driven framework for dynamic field mapping and validation, enabling scalable and configurable application behavior based on JSON definitions",
                    "Developed reusable, generic Angular components to standardize UI behavior, minimize bugs, and boost development efficiency",
                    "Integrated microservices using RabbitMQ to establish asynchronous communication between applications, driving workflow automation and reducing operational overhead"
                  ],
                tags:["C#","Angular",".NET","SQL Server","Entity Framework"]
            }
        ]
    }
]