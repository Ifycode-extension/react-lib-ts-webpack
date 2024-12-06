import React from 'react';
import '../styles/styles.css';

export interface GitHubSyncProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  configOptions: {
    instance_id: string;
  };
}

export const GitHubSync: React.FunctionComponent<GitHubSyncProps> = (props: GitHubSyncProps) => {
  const { configOptions } = props;
  console.log(configOptions);
  if (!configOptions.instance_id) {
    return null;
  }
  return (
    <>
      <button className="UI-Button" onClick={() => alert('Test')}>
        {configOptions.instance_id}
      </button>
    </>
  );
};
