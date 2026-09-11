import { useState } from 'react';

export interface ReviewFormData {
  name: string;
  email: string;
  experience: string;
  rating: number;
  review: string;
}

const GOOGLE_REVIEW_LINK = "https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review";

export const useReviewForm = () => {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    email: '',
    experience: '',
    rating: 0,
    review: '',
  });

  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingSelect = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.rating === 0) {
      setErrorMessage('Please select a rating before submitting.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      if (formData.rating >= 4) {
        window.open(GOOGLE_REVIEW_LINK, '_blank');
      }

      setShowAlert(true);
      setFormData({
        name: '',
        email: '',
        experience: '',
        rating: 0,
        review: '',
      });
    } catch {
      setErrorMessage('We could not process your review right now. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeAlert = () => setShowAlert(false);

  return {
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
  };
};