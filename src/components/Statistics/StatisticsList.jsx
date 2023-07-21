import { Item, Label, Percentage } from './Statistics.styled';
export const StatisticsList = ({ stats }) => {
        
        return (stats.map((stat) => {
                return (
                
                    <Item key={stat.id}>
                      <Label>{stat.label}</Label>
                      <Percentage>{stat.percentage}%</Percentage>
                    </Item>
                
                );
        }))
} 
