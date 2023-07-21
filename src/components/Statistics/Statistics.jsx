import { StatisticsList } from './StatisticsList';
import { Section, Title, StatList } from './Statistics.styled';
import data from "./data.json"

export const Statistics = ({ title}) => {
  return (
    <Section>
      <Title>{title}</Title>
      <StatList>
        <StatisticsList stats={data} />
      </StatList>
    </Section>
  );
};