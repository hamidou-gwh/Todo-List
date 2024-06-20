import TodoList from "./TodoList";
import React from 'react';
import { render } from '@testing-library/react';

describe('TodoList Component', () => {
  const tasks = [
    { id: 1, title: '1', description: '1', created_date: '2024-06-21', due_date: '2024-06-22' },
    { id: 2, title: '2', description: '2', created_date: '2024-06-22', due_date: '2024-06-23' },
  ];

  test('renders TodoList component without crashing', () => {
    render(<TodoList tasks={[]} />);
  });

  test('renders tasks correctly', () => {
    const { queryAllByText } = render(<TodoList tasks={tasks} />);
    tasks.forEach(task => {
      const titleElements = queryAllByText(task.title);
      expect(titleElements.length).toBeGreaterThanOrEqual(1); 

      const descriptionElements = queryAllByText(task.description);
      expect(descriptionElements.length).toBeGreaterThanOrEqual(1); 

      const createdDateElements = queryAllByText(`Created: ${task.created_date}`);
      expect(createdDateElements.length).toBeGreaterThanOrEqual(1); 

      const dueDateElements = queryAllByText(`Due: ${task.due_date}`);
      expect(dueDateElements.length).toBeGreaterThanOrEqual(1);
    });
    
  });
});