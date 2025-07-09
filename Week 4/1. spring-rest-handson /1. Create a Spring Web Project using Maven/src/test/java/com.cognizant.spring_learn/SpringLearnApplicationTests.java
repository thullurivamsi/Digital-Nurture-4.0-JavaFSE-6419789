package com.cognizant.spring_learn;

import com.cognizant.spring_learn.Service.CircleService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class SpringLearnApplicationTests {
	@Autowired
	private CircleService circleService ;

	@Test
	void testRadius() {
		circleService.setRadius(7);
		assertEquals(7, circleService.getRadius());
	}

	@Test
	void testCircumference() {
		circleService.setRadius(14);
		assertEquals(88, circleService.getCircumference());
	}

	@Test
	void testArea() {
		circleService.setRadius(3.5);
		assertEquals(38.5, circleService.getArea());
	}

}
