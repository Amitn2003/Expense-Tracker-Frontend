import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Personal Finance Simplified.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Track expenses, manage budgets, and build better money habits with our all-in-one dashboard.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-50 transition">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-indigo-800 px-6 py-3 rounded-md font-semibold hover:bg-indigo-900 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">What You Get</h2>
          <p className="text-gray-600 mt-2">All the tools you need to take control of your financial life.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <FeatureCard title="Dashboard" desc="View all your finances in one place" icon="📊" />
          <FeatureCard title="Income Tracking" desc="Record and analyze your income sources" icon="💰" />
          <FeatureCard title="Budget Planner" desc="Set monthly budgets & goals easily" icon="📝" />
          <FeatureCard title="AI Suggestions" desc="Smart recommendations to save more" icon="🧠" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-600 mt-2">Simple steps to get started with your finance journey.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <StepCard step="1" title="Create an Account" />
          <StepCard step="2" title="Add Your Income & Expenses" />
          <StepCard step="3" title="Analyze and Grow" />
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="text-gray-600 mt-2">Trusted by users to make better financial choices.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ReviewCard
            name="Amit N."
            feedback="This app helped me save 20% more each month. Love the budgeting feature!"
          />
          <ReviewCard
            name="Sayak A."
            feedback="Beautiful and simple UI. I finally understand my spending habits."
          />
          <ReviewCard
            name="Jit G."
            feedback="The AI suggestions are spot-on. Great for students managing part-time incomes."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 py-16 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to take control of your money?</h2>
        <p className="mb-6 text-indigo-100">Join thousands using our free finance tracker today.</p>
        <Link to="/register">
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Create Your Free Account
          </button>
        </Link>
        <p className="mt-4 text-sm text-indigo-200">PWA ready • Mobile optimized • Privacy focused</p>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, desc, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const StepCard = ({ step, title }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="text-2xl font-bold text-blue-600 mb-2">Step {step}</div>
    <h4 className="text-lg font-semibold">{title}</h4>
  </div>
);

const ReviewCard = ({ name, feedback }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <p className="text-gray-700 italic">“{feedback}”</p>
    <div className="mt-4 text-sm font-semibold text-indigo-700">— {name}</div>
  </div>
);

export default HomePage;
