import StandOutCard from "./stand-out-card";

const StandOutSection = () => {
  return (
    <section className="min-h-screen flex flex-col gap-16 md:gap-36 overflow-hidden">
      <h1 className="text-5xl md:text-6xl text-center font-semibold drop-shadow-primary">Why choose us?</h1>
      <div className="flex flex-col gap-12 md:gap-36 px-2 py-3">
        <StandOutCard
          initialX={[-100, 100]}
          imageUrl="/photography-illustration.jpeg"
          title="Expert Instructors & Flexible Learning"
          description="Learn from experienced professionals who are leaders in their fields, with the flexibility to access courses anytime, anywhere, and at your own pace."
        />
        <StandOutCard
          initialX={[100, -100]}
          imageUrl="/chef-illustration.jpeg"
          title="Comprehensive Resources & Community Support"
          description="Gain access to a wealth of resources, including video tutorials, downloadable materials, and interactive assignments, while benefiting from a supportive community that encourages peer-to-peer learning and collaboration."
          order={['order-2', 'order-1']}
        />
        <StandOutCard
          initialX={[-100, 100]}
          imageUrl="/team-collaboration.jpeg"
          title="Affordable Pricing"
          description="Enjoy premium content and features at competitive prices, with various subscription options to fit your budget."
        />
      </div>
    </section>
  );
};

export default StandOutSection;
