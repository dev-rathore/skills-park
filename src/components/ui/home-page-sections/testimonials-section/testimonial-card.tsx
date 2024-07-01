type Testimonial = {
  name: string;
  designation: string;
  comments: string[];
}

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard:React.FC<Props> = ({
  testimonial,
}) => {
  return (
    <div
      className="border-2 border-secondary shadow-secondary min-w-[280px] max-w-[280px] md:min-w-[560px] md:max-w-[auto] p-8 flex flex-col gap-4"
    >
      <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
      <h4 className="text-lg font-medium">- {testimonial.designation}</h4>
      <div className="flex flex-col gap-4">
        {testimonial.comments.map((comment) => (
          <p>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
