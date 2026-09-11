'use client';

import React from 'react';
import { Star, CheckCircle, ArrowRight, X } from 'lucide-react';
import { useReviewForm } from '@/hooks/useReviewForm';
import SectionTitle from '../common/SectionTitle';

export const ReviewSection: React.FC = () => {
  const {
    formData,
    hoverRating,
    isSubmitting,
    errorMessage,
    showAlert,
    setHoverRating,
    handleInputChange,
    handleRatingSelect,
    handleSubmit,
    closeAlert,
  } = useReviewForm();

  return (
    <section className="relative bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans dark:bg-slate-950 transition-colors duration-300">
      <SectionTitle title="Share Your Experience" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side Header */}
        <div className="lg:col-span-5 space-y-4 pt-2">
          <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 font-semibold text-xs tracking-wider uppercase">
            <Star className="w-4 h-4 fill-current" />
            <span>Share Your Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            How was <br />
            your Marsa <br />
            Alam day?
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-md">
            Your feedback helps future travellers plan with confidence. Every submission is reviewed before it appears publicly.
          </p>

          <div className="flex items-center space-x-2 pt-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
            <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span>Your review is submitted privately for approval first.</span>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm transition-all">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-cyan-400 focus:bg-white dark:focus:bg-slate-900 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email <span className="text-slate-400 dark:text-slate-500 font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-cyan-400 focus:bg-white dark:focus:bg-slate-900 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Your experience
              </label>
              <select
                name="experience"
                required
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-cyan-400 focus:bg-white dark:focus:bg-slate-900 transition"
              >
                <option value="" disabled>Choose an experience</option>
                <option value="snorkeling">Snorkeling Trip</option>
                <option value="desert-safari">Desert Safari</option>
                <option value="diving">Scuba Diving</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Rate your experience <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleRatingSelect(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-0.5 focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= (hoverRating || formData.rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {formData.rating ? `${formData.rating}/5 selected` : '0/5 selected'}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Your review
              </label>
              <textarea
                name="review"
                required
                rows={4}
                value={formData.review}
                onChange={handleInputChange}
                className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-cyan-400 focus:bg-white dark:focus:bg-slate-900 transition resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="shrink-0 rounded-xl bg-cyan-600 hover:bg-cyan-700 px-5 py-2.5 text-xs font-bold text-white transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send my review'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {errorMessage && (
                <p className="text-xs text-red-500 font-medium">
                  {errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>

      </div>

      {/* Native CSS Modal Alert */}
      {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 text-center space-y-4 animate-scaleUp">
            <button
              onClick={closeAlert}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-950/60 rounded-full flex items-center justify-center mx-auto text-cyan-600 dark:text-cyan-400">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Thank you for your feedback!
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Your review has been successfully received. We appreciate your time!
              </p>
            </div>

            <button
              onClick={closeAlert}
              className="w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 py-2.5 text-xs font-bold text-white transition active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};