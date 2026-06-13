"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import { useEffect, useState } from "react";

// 顏色配置
const COLORS = {
  primary: "#10b981", // emerald-500
  secondary: "#3b82f6", // blue-500
  accent: "#f43f5e", // rose-500
  purple: "#8b5cf6", // violet-500
  amber: "#f59e0b", // amber-500
  teal: "#14b8a6", // teal-500
};

const CHART_COLORS = [COLORS.primary, COLORS.secondary, COLORS.accent, COLORS.purple, COLORS.amber, COLORS.teal];

// 通用Tooltip樣式
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800/95 border border-slate-700 rounded-xl p-4 shadow-xl">
        <p className="text-slate-300 font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-bold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// 柱狀圖組件
interface BarChartProps {
  data: Array<{ name: string; value: number; [key: string]: any }>;
  title?: string;
  color?: string;
  unit?: string;
  height?: number;
}

export function StatsBarChart({ data, title, color = COLORS.primary, unit = "", height = 300 }: BarChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px] bg-slate-800/30 rounded-xl animate-pulse" />;

  return (
    <div className="my-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
      {title && <h4 className="text-white font-bold mb-4 text-center">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" fill={color} radius={[8, 8, 0, 0]} name={unit || "数值"}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// 餅圖組件
interface PieChartData {
  name: string;
  value: number;
  color?: string;
}

interface PieChartComponentProps {
  data: PieChartData[];
  title?: string;
  height?: number;
  showLegend?: boolean;
}

export function StatsPieChart({ data, title, height = 300, showLegend = true }: PieChartComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px] bg-slate-800/30 rounded-xl animate-pulse" />;

  const chartData = data.map((item, index) => ({
    ...item,
    color: item.color || CHART_COLORS[index % CHART_COLORS.length],
  }));

  return (
    <div className="my-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
      {title && <h4 className="text-white font-bold mb-4 text-center">{title}</h4>}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        {showLegend && (
          <div className="flex flex-col gap-2">
            {chartData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-slate-300 text-sm">{entry.name}</span>
                <span className="text-slate-400 text-sm">({entry.value}%)</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// 折線圖組件
interface LineChartData {
  name: string;
  [key: string]: number | string;
}

interface LineChartComponentProps {
  data: LineChartData[];
  title?: string;
  lines: Array<{ dataKey: string; name: string; color: string }>;
  height?: number;
}

export function StatsLineChart({ data, title, lines, height = 300 }: LineChartComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px] bg-slate-800/30 rounded-xl animate-pulse" />;

  return (
    <div className="my-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
      {title && <h4 className="text-white font-bold mb-4 text-center">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color}
              strokeWidth={3}
              dot={{ fill: line.color, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// 面積圖組件
interface AreaChartData {
  name: string;
  [key: string]: number | string;
}

interface AreaChartComponentProps {
  data: AreaChartData[];
  title?: string;
  lines: Array<{ dataKey: string; name: string; color: string }>;
  height?: number;
}

export function StatsAreaChart({ data, title, lines, height = 300 }: AreaChartComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px] bg-slate-800/30 rounded-xl animate-pulse" />;

  return (
    <div className="my-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
      {title && <h4 className="text-white font-bold mb-4 text-center">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <defs>
            {lines.map((line, index) => (
              <linearGradient key={index} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={line.color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={line.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {lines.map((line, index) => (
            <Area
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color}
              fill={`url(#gradient-${index})`}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// 水平柱狀圖
interface HorizontalBarChartProps {
  data: Array<{ name: string; value: number; [key: string]: any }>;
  title?: string;
  color?: string;
  height?: number;
}

export function StatsHorizontalBarChart({ data, title, color = COLORS.primary, height = 300 }: HorizontalBarChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px] bg-slate-800/30 rounded-xl animate-pulse" />;

  return (
    <div className="my-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
      {title && <h4 className="text-white font-bold mb-4 text-center">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} layout="vertical" margin={{ top: 10, right: 30, left: 80, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
          <XAxis type="number" stroke="#94a3b8" fontSize={12} tickLine={false} />
          <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" fill={color} radius={[0, 8, 8, 0]} name="数值">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// 雷達圖組件
interface RadarChartData {
  subject: string;
  A: number;
  B: number;
  fullMark?: number;
}

interface RadarChartComponentProps {
  data: RadarChartData[];
  title?: string;
  height?: number;
}

// 雷達圖需要額外的雷達圖組件
export function StatsRadarChart({ data, title, height = 300 }: RadarChartComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px] bg-slate-800/30 rounded-xl animate-pulse" />;

  return (
    <div className="my-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
      {title && <h4 className="text-white font-bold mb-4 text-center">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="subject" stroke="#94a3b8" fontSize={12} tickLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="A" fill={COLORS.primary} radius={[8, 8, 0, 0]} name="當前" />
          <Bar dataKey="B" fill={COLORS.secondary} radius={[8, 8, 0, 0]} name="目標" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// 儀表盤組件
interface GaugeChartProps {
  value: number;
  max: number;
  label: string;
  unit?: string;
  color?: string;
}

export function StatsGaugeChart({ value, max, label, unit = "%", color = COLORS.primary }: GaugeChartProps) {
  const [mounted, setMounted] = useState(false);
  const percentage = Math.min((value / max) * 100, 100);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[200px] bg-slate-800/30 rounded-xl animate-pulse" />;

  return (
    <div className="my-6 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 flex flex-col items-center">
      <div className="relative w-40 h-24 overflow-hidden">
        <div className="absolute inset-0 border-[12px] border-slate-700 rounded-t-full" />
        <div
          className="absolute bottom-0 left-1/2 w-4 h-24 bg-gradient-to-t transition-all duration-1000"
          style={{
            backgroundColor: color,
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${-90 + (percentage * 180) / 100}deg)`,
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-800 border-4 border-slate-700" />
      </div>
      <div className="text-center mt-4">
        <div className="text-3xl font-bold" style={{ color }}>
          {value}
          <span className="text-lg">{unit}</span>
        </div>
        <div className="text-slate-400 text-sm">{label}</div>
      </div>
    </div>
  );
}

// 簡單的統計卡片
interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "up" | "down" | "neutral";
  icon?: string;
}

export function StatCard({ title, value, change, changeType = "neutral", icon }: StatCardProps) {
  const changeColors = {
    up: "text-emerald-400",
    down: "text-red-400",
    neutral: "text-slate-400",
  };

  return (
    <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
      <div className="flex items-center justify-between mb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <span className="text-slate-400 text-sm">{title}</span>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      {change && <div className={`text-sm ${changeColors[changeType]}`}>{change}</div>}
    </div>
  );
}

// 比較表格圖表
interface ComparisonTableProps {
  data: Array<{
    name: string;
    values: number[];
    maxValue?: number;
  }>;
  headers: string[];
  title?: string;
  colors?: string[];
}

export function ComparisonChart({ data, headers, title, colors = CHART_COLORS }: ComparisonTableProps) {
  const [mounted, setMounted] = useState(false);
  const maxValue = Math.max(...data.map((d) => Math.max(...d.values)));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px] bg-slate-800/30 rounded-xl animate-pulse" />;

  return (
    <div className="my-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
      {title && <h4 className="text-white font-bold mb-6 text-center">{title}</h4>}
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-24" />
          {headers.map((header, index) => (
            <div key={index} className="flex-1 text-center text-sm text-slate-400 font-medium">
              {header}
            </div>
          ))}
        </div>
        {/* Data rows */}
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-4">
            <div className="w-24 text-slate-300 text-sm font-medium truncate">{row.name}</div>
            {row.values.map((value, colIndex) => {
              const width = (value / maxValue) * 100;
              const color = colors[colIndex % colors.length];
              return (
                <div key={colIndex} className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-8 bg-slate-700/50 rounded-lg overflow-hidden">
                      <div
                        className="h-full rounded-lg transition-all duration-700 flex items-center justify-end pr-2"
                        style={{ width: `${width}%`, backgroundColor: color }}
                      >
                        <span className="text-white text-xs font-bold">{value}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// 趨勢箭頭
interface TrendIndicatorProps {
  value: number;
  label: string;
}

export function TrendIndicator({ value, label }: TrendIndicatorProps) {
  const isPositive = value >= 0;
  const color = isPositive ? "text-emerald-400" : "text-red-400";
  const icon = isPositive ? "↑" : "↓";

  return (
    <div className="flex items-center gap-2">
      <span className={`text-xl font-bold ${color}`}>
        {icon} {Math.abs(value)}%
      </span>
      <span className="text-slate-400 text-sm">{label}</span>
    </div>
  );
}