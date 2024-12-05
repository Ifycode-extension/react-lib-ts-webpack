import React from 'react';
import './styles/styles.css';

export interface GitHubSyncProps {
  instance_id: string | number;
}

export default function ({ instance_id }: GitHubSyncProps) {
  return (
    <>
      <button className="UI-Button"> { instance_id } </button>
    </>
  );
};
