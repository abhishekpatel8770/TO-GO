const data = [
    {
      title: "General Aptitude",
      links: [
        { name: "Arithmetic Aptitude", url: "#" },
        { name: "Data Interpretation", url: "#" },
        { name: "Online Aptitude Test", url: "#" },
        { name: "Data Interpretation Test", url: "#" }
      ]
    },
    {
      title: "Verbal and Reasoning",
      links: [
        { name: "Verbal Ability", url: "#" },
        { name: "Logical Reasoning", url: "#" },
        { name: "Verbal Reasoning", url: "#" },
        { name: "Non Verbal Reasoning", url: "#" }
      ]
    },
    {
        title: "Reasoning",
        links: [
          { name: "Verbal Ability", url: "#" },
          { name: "Logical Reasoning", url: "#" },
          { name: "Verbal Reasoning", url: "#" },
          { name: "Non Verbal Reasoning", url: "#" }
        ]
      },
      {
        title: "Reasoning",
        links: [
          { name: "Verbal Ability", url: "#" },
          { name: "Logical Reasoning", url: "#" },
          { name: "Verbal Reasoning", url: "#" },
          { name: "Non Verbal Reasoning", url: "#" }
        ]
      },
      {
        title: "Reasoning",
        links: [
          { name: "Verbal Ability", url: "#" },
          { name: "Logical Reasoning", url: "#" },
          { name: "Verbal Reasoning", url: "#" },
          { name: "Non Verbal Reasoning", url: "#" }
        ]
      },
      {
        title: "Reasoning",
        links: [
          { name: "Verbal Ability", url: "#" },
          { name: "Logical Reasoning", url: "#" },
          { name: "Verbal Reasoning", url: "#" },
          { name: "Non Verbal Reasoning", url: "#" }
        ]
      },
      {
        title: "Reasoning",
        links: [
          { name: "Verbal Ability", url: "#" },
          { name: "Logical Reasoning", url: "#" },
          { name: "Verbal Reasoning", url: "#" },
          { name: "Non Verbal Reasoning", url: "#" }
        ]
      },
      {
        title: "Reasoning",
        links: [
          { name: "Verbal Ability", url: "#" },
          { name: "Logical Reasoning", url: "#" },
          { name: "Verbal Reasoning", url: "#" },
          { name: "Non Verbal Reasoning", url: "#" }
        ]
      },
      {
        title: "Reasoning",
        links: [
          { name: "Verbal Ability", url: "#" },
          { name: "Logical Reasoning", url: "#" },
          { name: "Verbal Reasoning", url: "#" },
          { name: "Non Verbal Reasoning", url: "#" }
        ]
      },
      {
        title: "Reasoning",
        links: [
          { name: "Verbal Ability", url: "#" },
          { name: "Logical Reasoning", url: "#" },
          { name: "Verbal Reasoning", url: "#" },
          { name: "Non Verbal Reasoning", url: "#" }
        ]
      }
    // Add more categories as needed
  ];
  
  const grid = document.querySelector('.grid');
  
  data.forEach(category => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const title = document.createElement('h2');
    title.textContent = category.title;
    
    const ul = document.createElement('ul');
    
    category.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = link.name;
      a.href = link.url;
      li.appendChild(a);
      ul.appendChild(li);
    });
    
    card.appendChild(title);
    card.appendChild(ul);
    grid.appendChild(card);
  });
  