import React from "react";

const Footer = () => {
	return (
		<footer className="bg-white dark:bg-black text-gray-800 dark:text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					<div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0">
						<h4 className="text-lg font-bold mb-2">Company</h4>
						<ul className="text-sm">
							<li className="mb-1">
								<a
									href="#"
									className="hover:text-gray-600 dark:hover:text-gray-400"
								>
									About
								</a>
							</li>
							<li className="mb-1">
								<a
									href="#"
									className="hover:text-gray-600 dark:hover:text-gray-400"
								>
									Careers
								</a>
							</li>
							<li className="mb-1">
								<a
									href="#"
									className="hover:text-gray-600 dark:hover:text-gray-400"
								>
									Press
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0">
						<h4 className="text-lg font-bold mb-2">Resources</h4>
						<ul className="text-sm">
							<li className="mb-1">
								<a
									href="#"
									className="hover:text-gray-600 dark:hover:text-gray-400"
								>
									Blog
								</a>
							</li>
							<li className="mb-1">
								<a
									href="#"
									className="hover:text-gray-600 dark:hover:text-gray-400"
								>
									Documentation
								</a>
							</li>
							<li className="mb-1">
								<a
									href="#"
									className="hover:text-gray-600 dark:hover:text-gray-400"
								>
									Community
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0">
						<h4 className="text-lg font-bold mb-2">Legal</h4>
						<ul className="text-sm">
							<li className="mb-1">
								<a
									href="#"
									className="hover:text-gray-600 dark:hover:text-gray-400"
								>
									Privacy Policy
								</a>
							</li>
							<li className="mb-1">
								<a
									href="#"
									className="hover:text-gray-600 dark:hover:text-gray-400"
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/4">
						<h4 className="text-lg font-bold mb-2">Follow Us</h4>
						<div className="flex">
							<a
								href="#"
								className="mr-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
							>
								<i className="fab fa-facebook"></i>
							</a>
							<a
								href="#"
								className="mr-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
							>
								<i className="fab fa-twitter"></i>
							</a>
							<a
								href="#"
								className="mr-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
							>
								<i className="fab fa-instagram"></i>
							</a>
							<a
								href="#"
								className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
							>
								<i className="fab fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
					<p className="text-sm text-center">
						&copy; {new Date().getFullYear()} Baibhav Malaviya. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
