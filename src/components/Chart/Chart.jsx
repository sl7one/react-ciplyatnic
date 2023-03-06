import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

export const Chart = ({ list, palitra }) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${name} ${value} шт`}
      </text>
    );
  };
  const renderLegend = ({ payload }) => {
    return (
      <ul>
        {payload.map(({ payload }, index) => {
          const { name, value, fill } = payload;
          return (
            <li
              key={`item-${index}`}
              style={{
                padding: '5px',
                backgroundColor: fill,
                width: '200px',
              }}
            >{`${name} ${value} шт`}</li>
          );
        })}
      </ul>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="33.33%">
      <PieChart>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          iconType="circle"
          content={renderLegend}
        />
        <Pie
          data={list}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={60}
          paddingAngle={5}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {list.map((_, index) => (
            <Cell key={`cell-${index}`} fill={palitra[index % palitra.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
