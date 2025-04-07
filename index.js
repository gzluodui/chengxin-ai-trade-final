export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">橙心智投 ChengXin AI Trade</h1>
        <p className="text-orange-400">专注合约策略、数据分析与AI智能交易辅助！</p>
      </header>

      <section className="bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">📢 横幅公告</h2>
        <p className="text-lg text-orange-300">欢迎使用橙心智投，专注合约策略、数据分析与AI智能交易辅助！</p>
      </section>

      <section className="bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">📊 假策略展示</h2>
        <ul className="space-y-2">
          <li>BTC/USDT - 做多 - 开仓: 65200 - 止盈: 67200 - 止损: 64500</li>
          <li>ETH/USDT - 做空 - 开仓: 3120 - 止盈: 2950 - 止损: 3180</li>
        </ul>
      </section>

      <section className="bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">📰 宏观热点新闻（示意）</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>比特币ETF资金流入大增，市场看涨情绪升温</li>
          <li>美联储官员表示或延迟降息，美元持续走强</li>
        </ul>
      </section>
    </div>
  );
}
