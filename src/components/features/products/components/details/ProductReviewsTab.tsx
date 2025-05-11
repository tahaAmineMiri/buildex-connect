// ProductReviewsTab Component
// This component displays customer reviews in the product detail modal
// It shows review ratings, comments, and author information

import { Star } from "lucide-react"; // Star icon for ratings

const ProductReviewsTab = () => {
  // Mock review data - in a real application, this would come from an API
  const reviews = [
    { 
      name: "John Contractor", 
      rating: 5, 
      date: "2 months ago",
      comment: "Excellent quality materials. Delivered on time and exactly as described. Will order again."
    },
    { 
      name: "Building Corp LLC", 
      rating: 4, 
      date: "3 months ago",
      comment: "Good product, competitive pricing. Shipping was a day late but customer service was helpful."
    },
    { 
      name: "Metro Builders", 
      rating: 5, 
      date: "4 months ago",
      comment: "We've been using these materials for multiple projects. Consistent quality and reliable delivery."
    }
  ];

  return (
    <div className="mt-2 focus:outline-none">
      <div className="space-y-6">
        {/* Map through and display each review */}
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
            {/* Review header with reviewer name and date */}
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">{review.name}</h4>
              <span className="text-sm text-construction-slate">{review.date}</span>
            </div>
            
            {/* Star rating display */}
            <div className="flex items-center mb-2">
              {/* Create an array of 5 empty items and map over it to show stars */}
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            
            {/* Review comment */}
            <p className="text-construction-slate">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviewsTab;