"use client";

import {
  StatsBarChart,
  StatsPieChart,
  StatsLineChart,
  StatsAreaChart,
  StatsHorizontalBarChart,
  StatsGaugeChart,
  ComparisonChart,
  StatCard,
  TrendIndicator,
} from "./Charts";

// 圖表數據接口
interface ChartData {
  type: string;
  data?: any;
  title?: string;
  config?: any;
}

// 預定義的圖表配置
const CHART_PRESETS: Record<string, ChartData> = {
  // 投資相關圖表
  "etf-comparison": {
    type: "bar",
    title: "各類型投資工具比較",
    data: [
      { name: "股票", value: 85, color: "#3b82f6" },
      { name: "ETF", value: 75, color: "#10b981" },
      { name: "債券", value: 60, color: "#f59e0b" },
      { name: "黃金", value: 55, color: "#f43f5e" },
      { name: "存款", value: 40, color: "#8b5cf6" },
    ],
  },
  "etf-returns": {
    type: "area",
    title: "ETF 平均年度回報率走勢",
    data: [
      { name: "2018", etf: 8.2, sp500: 6.1 },
      { name: "2019", etf: 18.5, sp500: 21.3 },
      { name: "2020", etf: 15.2, sp500: 16.3 },
      { name: "2021", etf: 22.8, sp500: 26.9 },
      { name: "2022", etf: -8.2, sp500: -12.5 },
      { name: "2023", etf: 15.6, sp500: 18.2 },
      { name: "2024", etf: 12.3, sp500: 14.8 },
    ],
    config: {
      lines: [
        { dataKey: "etf", name: "ETF平均", color: "#10b981" },
        { dataKey: "sp500", name: "S&P 500", color: "#3b82f6" },
      ],
    },
  },
  "investment-allocation": {
    type: "pie",
    title: "建議資產配置比例",
    data: [
      { name: "股票ETF", value: 40, color: "#10b981" },
      { name: "債券ETF", value: 25, color: "#3b82f6" },
      { name: "黃金ETF", value: 10, color: "#f59e0b" },
      { name: "現金", value: 15, color: "#8b5cf6" },
      { name: "其他", value: 10, color: "#f43f5e" },
    ],
  },
  "risk-comparison": {
    type: "horizontal-bar",
    title: "不同投資工具風險等級",
    data: [
      { name: "藍籌股", value: 70 },
      { name: "科技股", value: 85 },
      { name: "加密貨幣", value: 95 },
      { name: "國債", value: 20 },
      { name: "定期存款", value: 5 },
    ],
  },

  // 健康相關圖表
  "bmi-distribution": {
    type: "pie",
    title: "香港成年人BMI分佈",
    data: [
      { name: "體重過輕", value: 8, color: "#14b8a6" },
      { name: "正常體重", value: 45, color: "#10b981" },
      { name: "過重", value: 32, color: "#f59e0b" },
      { name: "肥胖", value: 15, color: "#f43f5e" },
    ],
  },
  "exercise-benefits": {
    type: "bar",
    title: "運動對健康的改善效果",
    data: [
      { name: "心肺功能", value: 85, color: "#10b981" },
      { name: "睡眠質量", value: 75, color: "#3b82f6" },
      { name: "情緒管理", value: 80, color: "#8b5cf6" },
      { name: "免疫力", value: 70, color: "#14b8a6" },
      { name: "認知功能", value: 65, color: "#f59e0b" },
    ],
  },
  "daily-nutrition": {
    type: "horizontal-bar",
    title: "每日營養攝取建議",
    data: [
      { name: "蛋白質", value: 75 },
      { name: "蔬果", value: 80 },
      { name: "全穀物", value: 60 },
      { name: "乳製品", value: 50 },
      { name: "健康脂肪", value: 55 },
    ],
  },
  "sleep-stages": {
    type: "area",
    title: "理想睡眠階段分佈",
    data: [
      { name: "清醒", value: 5, deep: 3, rem: 2 },
      { name: "REM", value: 20, deep: 5, rem: 25 },
      { name: "淺睡", value: 50, deep: 35, rem: 45 },
      { name: "深睡", value: 25, deep: 30, rem: 10 },
    ],
    config: {
      lines: [
        { dataKey: "清醒", name: "清醒", color: "#f43f5e" },
        { dataKey: "REM", name: "REM睡眠", color: "#8b5cf6" },
        { dataKey: "淺睡", name: "淺睡眠", color: "#3b82f6" },
        { dataKey: "深睡", name: "深睡眠", color: "#10b981" },
      ],
    },
  },
  "stress-levels": {
    type: "gauge",
    title: "壓力指數測量",
    data: { value: 68, max: 100, label: "当前压力水平" },
  },

  // 飲食相關圖表
  "mediterranean-diet": {
    type: "pie",
    title: "地中海飲食金字塔",
    data: [
      { name: "蔬菜水果", value: 35, color: "#10b981" },
      { name: "全穀物", value: 25, color: "#f59e0b" },
      { name: "橄欖油", value: 15, color: "#14b8a6" },
      { name: "魚類", value: 12, color: "#3b82f6" },
      { name: "堅果豆類", value: 8, color: "#8b5cf6" },
      { name: "紅肉甜點", value: 5, color: "#f43f5e" },
    ],
  },
  "calorie-breakdown": {
    type: "bar",
    title: "一日三餐熱量分配建議",
    data: [
      { name: "早餐", value: 25, color: "#f59e0b" },
      { name: "午餐", value: 40, color: "#10b981" },
      { name: "晚餐", value: 25, color: "#3b82f6" },
      { name: "零食", value: 10, color: "#8b5cf6" },
    ],
  },

  // 退休規劃圖表
  "retirement-savings": {
    type: "line",
    title: "不同年齡開始儲蓄的累積金額（假設每月5000蚊）",
    data: [
      { name: "25歲", amount: 240, target: 100 },
      { name: "30歲", amount: 180, target: 100 },
      { name: "35歲", amount: 120, target: 100 },
      { name: "40歲", amount: 72, target: 100 },
      { name: "45歲", amount: 36, target: 100 },
      { name: "50歲", amount: 12, target: 100 },
    ],
    config: {
      lines: [
        { dataKey: "amount", name: "實際累積", color: "#10b981" },
        { dataKey: "target", name: "目標", color: "#f43f5e" },
      ],
    },
  },
  "passive-income": {
    type: "comparison",
    title: "被動收入方式比較",
    data: [
      { name: "租金收入", values: [80, 40, 60] },
      { name: "股息收入", values: [60, 85, 75] },
      { name: "利息收入", values: [40, 95, 50] },
      { name: "版權收入", values: [30, 70, 90] },
    ],
    headers: ["收益", "穩定性", "門檻"],
  },

  // 統計卡片預設
  "key-stats": {
    type: "stat-cards",
    data: [
      { title: "平均回報", value: "8.5%", change: "+2.3%", changeType: "up", icon: "📈" },
      { title: "風險指數", value: "中低", change: "穩健型", changeType: "neutral", icon: "🛡️" },
      { title: "投資門檻", value: "$100", change: "最低", changeType: "neutral", icon: "💰" },
    ],
  },
};

// 圖表渲染器組件
interface ArticleChartProps {
  chartId: string;
}

export function ArticleChart({ chartId }: ArticleChartProps) {
  const preset = CHART_PRESETS[chartId];

  if (!preset) {
    return (
      <div className="my-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 text-center text-slate-400">
        圖表加載中...
      </div>
    );
  }

  switch (preset.type) {
    case "bar":
      return <StatsBarChart data={preset.data!} title={preset.title} />;
    case "pie":
      return <StatsPieChart data={preset.data!} title={preset.title} />;
    case "line":
      return <StatsLineChart data={preset.data!} title={preset.title} lines={preset.config?.lines} />;
    case "area":
      return <StatsAreaChart data={preset.data!} title={preset.title} lines={preset.config?.lines} />;
    case "horizontal-bar":
      return <StatsHorizontalBarChart data={preset.data!} title={preset.title} />;
    case "gauge":
      return (
        <div className="flex justify-center">
          <StatsGaugeChart value={preset.data?.value} max={preset.data?.max} label={preset.data?.label} />
        </div>
      );
    case "comparison":
      return (
        <ComparisonChart
          data={preset.data!}
          headers={preset.headers || []}
          title={preset.title}
        />
      );
    case "stat-cards":
      return (
        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {preset.data?.map((stat: any, index: number) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeType={stat.changeType}
              icon={stat.icon}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
}

// 預覽所有圖表
export function ChartGallery() {
  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-xl font-bold text-white mb-6">📊 投資理財圖表</h3>
        <div className="space-y-8">
          <ArticleChart chartId="etf-comparison" />
          <ArticleChart chartId="etf-returns" />
          <ArticleChart chartId="investment-allocation" />
          <ArticleChart chartId="risk-comparison" />
          <ArticleChart chartId="retirement-savings" />
          <ArticleChart chartId="passive-income" />
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-6">❤️ 健康養生圖表</h3>
        <div className="space-y-8">
          <ArticleChart chartId="bmi-distribution" />
          <ArticleChart chartId="exercise-benefits" />
          <ArticleChart chartId="daily-nutrition" />
          <ArticleChart chartId="sleep-stages" />
          <ArticleChart chartId="stress-levels" />
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-6">🍜 飲食營養圖表</h3>
        <div className="space-y-8">
          <ArticleChart chartId="mediterranean-diet" />
          <ArticleChart chartId="calorie-breakdown" />
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-6">📈 關鍵統計</h3>
        <ArticleChart chartId="key-stats" />
      </section>
    </div>
  );
}

// 導出所有預設圖表ID供引用
export const CHART_IDS = Object.keys(CHART_PRESETS);