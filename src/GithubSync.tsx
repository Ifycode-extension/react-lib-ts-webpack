import React from 'react';
import './githubsync.css';

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
